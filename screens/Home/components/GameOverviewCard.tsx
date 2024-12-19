import React, { FC } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Text from "@/shared/components/themed/Text";
import View from "@/shared/components/themed/View";
import { Colors } from "@/shared/constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { EType } from "../constans";
import { IHistory, IScoreboard } from "../interfaces";

type GameOverviewProps = {
  header: string;
  data: IHistory | IScoreboard;
  type: EType;
};

const GameOverview: FC<GameOverviewProps> = ({ header, data, type }) => {
  const renderItem = ({
    item,
  }: {
    item: IHistory[number] | IScoreboard[number];
  }) => {
    if (type === EType.History) {
      const historyItem = item as IHistory[number];

      return (
        <View style={styles.row}>
          <View>
            <Text style={styles.playerName}>{historyItem.playerName}</Text>
            <Text style={styles.date}>{historyItem.date}</Text>
          </View>
          <Text
            style={[
              styles.result,
              styles[historyItem.result.toLowerCase() as keyof typeof styles],
            ]}
          >
            {historyItem.result}
          </Text>
        </View>
      );
    } else if (type === EType.Scoreboard) {
      const scoreboardItem = item as IScoreboard[number];
      return (
        <View style={styles.row}>
          <View style={styles.scoreRow}>
            <Icon
              name="star"
              size={20}
              color={Colors.light.orangeText}
              style={{ backgroundColor: Colors.light.cardBackgroundColor }}
            />
            <Text style={styles.rank}>
              {scoreboardItem.rank}. {scoreboardItem.playerName}
            </Text>
          </View>
          <Text style={styles.score}>{scoreboardItem.score}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{header}</Text>
      <TouchableOpacity>
        <View style={styles.container}>
          {data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>Empty</Text>
              <Text style={styles.emptySubtitle}>
                {type === EType.History
                  ? "Play some game."
                  : "Start playing folks."}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    backgroundColor: Colors.light.cardBackgroundColor,
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: Colors.light.cardBackgroundColor,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  playerName: {
    fontSize: 16,
    backgroundColor: Colors.light.cardBackgroundColor,
  },
  date: {
    fontSize: 14,
    color: "gray",
    backgroundColor: Colors.light.cardBackgroundColor,
  },
  result: {
    fontSize: 16,
    fontWeight: "bold",
  },
  won: {
    color: Colors.light.greenText,
  },
  lost: {
    color: Colors.light.redText,
  },
  draw: {
    color: Colors.light.textGray,
  },
  rank: {
    fontSize: 16,
    marginLeft: 5,
    backgroundColor: Colors.light.cardBackgroundColor,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.orangeText,
  },
  emptyState: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.light.textGray,
  },
  emptySubtitle: {
    fontSize: 14,
    color: Colors.light.textGray,
  },
});

export default GameOverview;
