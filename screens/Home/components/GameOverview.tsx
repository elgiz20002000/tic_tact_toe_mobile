import { FC, useCallback } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Text } from "@/shared/components/themed/Text";
import { View } from "@/shared/components/themed/View";
import { Colors } from "@/shared/constants/Colors";

import { EGameOverviewType } from "../constans";
import {
  IGameOverview,
  IGameOverviewRenderItem,
  IHistoryItem,
  IScoreboardItem,
} from "../interfaces";

export const GameOverview: FC<IGameOverview> = ({ header, data, type }) => {
  const renderItem = useCallback(
    ({ item }: IGameOverviewRenderItem) => {
      if (type === EGameOverviewType.History) {
        const historyItem = item as IHistoryItem;

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
      } else if (type === EGameOverviewType.Scoreboard) {
        const scoreboardItem = item as IScoreboardItem;
        return (
          <View style={styles.row}>
            <View style={styles.scoreRow}>
              <MaterialIcons
                name="star"
                size={20}
                color={Colors.light.orange}
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
    },
    [type]
  );

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
                {type === EGameOverviewType.History
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
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  scoreRow: {
    flexDirection: "row",
    alignItems: "center",
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
  won: {
    color: Colors.light.green,
  },
  lost: {
    color: Colors.light.red,
  },
  draw: {
    color: Colors.light.textGray,
  },
  rank: {
    fontSize: 14,
    marginLeft: 5,
  },
  score: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.orange,
  },
  emptyState: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.textGray,
  },
  emptySubtitle: {
    fontSize: 12,
    color: Colors.light.textGray,
  },
});
