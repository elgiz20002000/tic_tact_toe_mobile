import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";
import { Colors } from "@/shared/constants/colors";
import { useTheme } from "@/shared/contexts/theme";

import { EGameOverviewType } from "../constants";
import { useGameOverviewList } from "../hooks/useGameOverviewList";
import { IGameOverview } from "../interfaces";

export const GameOverview: FC<IGameOverview> = ({
  header,
  data,
  type,
  onPress,
}) => {
  const theme = useTheme();

  const gameOverviewList = useGameOverviewList(type, data);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>{header}</Text>
        <View
          style={[styles.container, { backgroundColor: theme.box.background }]}
        >
          {data.length > 0 ? (
            gameOverviewList
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
      </View>
    </TouchableOpacity>
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
