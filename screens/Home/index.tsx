import React from "react";
import { StyleSheet } from "react-native";
import StatisticsCard from "./components/StatisticCard";
import SafeAreaView from "@/shared/components/themed/SafeAreaView";
import Text from "@/shared/components/themed/Text";
import View from "@/shared/components/themed/View";
import GameOverview from "./components/GameOverviewCard";
import { historyData, scoreboardData } from "./data";
import { EType } from "./constans";
export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userAbout}>
        <Text style={styles.headerText}>Welcome</Text>
        <Text style={styles.userName}>Stefan Jovanovic</Text>
        <View style={styles.statisticsContainer}>
          <StatisticsCard wins={24} losses={18} draws={5} />
        </View>
      </View>
      <View style={styles.gameCards}>
        <GameOverview header="Game History" data={historyData} type={EType.History} />
        <GameOverview
          header="Scoreboard"
          data={scoreboardData}
          type={EType.Scoreboard}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 23,
    flex: 1,
  },
  headerText: {
    marginTop: 6,
    fontSize: 16,
    textAlign: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  statisticsContainer: {
    marginTop: 20,
  },
  userAbout: {
    display: "flex",
  },
  gameCards: {
    marginTop: 60,
    padding: 20,
    flex: 1,
  },
});

