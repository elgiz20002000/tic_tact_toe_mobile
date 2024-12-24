import { FC } from "react";
import { StyleSheet } from "react-native";

import { Text } from "@/shared/components/themed/Text";
import { View } from "@/shared/components/themed/View";
import { Colors } from "@/shared/constants/Colors";

import { IStatisticsCard } from "../interfaces";

export const StatisticsCard: FC<IStatisticsCard> = ({
  wins,
  losses,
  draws,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statAbout}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{wins}</Text>
          <Text style={styles.statLabel}>Wins</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{losses}</Text>
          <Text style={styles.statLabel}>Losses</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{draws}</Text>
          <Text style={styles.statLabel}>Draws</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  statAbout: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    width: "80%",
  },
  stat: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: Colors.light.textGray,
  },
});
