import { MaterialIcons } from "@expo/vector-icons";
import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";

import { IScoreboardItem } from "@/screens/Home/interfaces";
import { Text } from "@/shared/components/themed/Text";
import { View } from "@/shared/components/themed/View";
import { Colors } from "@/shared/constants/Colors";

interface IScoreboardList {
  data: IScoreboardItem[];
  minimized?: boolean;
}

const ScoreboardList: FC<IScoreboardList> = ({ data = [], minimized }) => {
  const renderScoreboardItem = ({ item }: { item: IScoreboardItem }) => (
    <View style={styles.itemContainer}>
      <View style={styles.rankContainer}>
        <MaterialIcons name="star" size={24} color={Colors.light.orange} />
        <Text style={minimized ? styles.rankMinimized : styles.rank}>
          {item.rank}. {item.playerName}
        </Text>
      </View>
      <Text style={minimized ? styles.scoreMinimized : styles.score}>
        {item.score}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderScoreboardItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "transparent",
  },
  rank: {
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  rankMinimized: {
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  rankContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    gap: 5,
  },
  score: {
    fontSize: 16,
    color: Colors.light.orange,
    fontWeight: "bold",
  },
  scoreMinimized: {
    fontSize: 14,
    color: Colors.light.orange,
    fontWeight: "bold",
  },
});

export default ScoreboardList;
