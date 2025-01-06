import { FC } from "react";
import { FlatList, StyleSheet } from "react-native";

import { IHistoryItem } from "@/screens/home/interfaces";
import { Text } from "@/shared/components/themed/text";
import { View } from "@/shared/components/themed/view";
import { Colors } from "@/shared/constants/colors";

interface IGameHistoryList {
  data: IHistoryItem[];
}

export const GameHistoryList: FC<IGameHistoryList> = ({ data = [] }) => {
  const renderGameHistoryItem = ({ item }: { item: IHistoryItem }) => (
    <View style={styles.itemContainer}>
      <View style={styles.nameContainer}>
        <Text style={styles.playerName}>{item.playerName}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <Text
        style={[
          styles.result,
          styles[item.result.toLowerCase() as keyof typeof styles],
        ]}
      >
        {item.result}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      scrollEnabled={false}
      keyExtractor={(item) => item.id}
      renderItem={renderGameHistoryItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "transparent",
  },
  nameContainer: {
    backgroundColor: "transparent",
  },
  playerName: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  result: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rank: {
    fontSize: 16,
  },
  score: {
    fontSize: 16,
    color: Colors.light.orange,
    fontWeight: "bold",
  },
  won: {
    color: Colors.light.green,
  },
  lost: {
    color: Colors.light.red,
  },
  draw: {
    color: Colors.light.textGray,
  },
});
