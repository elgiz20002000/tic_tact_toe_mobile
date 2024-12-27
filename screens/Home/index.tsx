import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

import { SafeAreaView } from "@/shared/components/themed/SafeAreaView";
import { Text } from "@/shared/components/themed/Text";
import { View } from "@/shared/components/themed/View";

import { GameOverview } from "./components/GameOverview";
import { StatisticsCard } from "./components/StatisticCard";
import { EGameOverviewType } from "./constans";
// TODO: Remove this line and use your own data model
import { historyData, scoreboardData } from "./data";

export const HomeScreen = () => {
  const router = useRouter();
  const limitedScoreboardData = scoreboardData.slice(0, 5);

  const handlePressScoreboardBox = () => {
    router.push("/(main)/(home)/scoreboard");
  };

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
        <GameOverview
          header="Game History"
          data={historyData}
          type={EGameOverviewType.History}
        />
        <TouchableOpacity onPress={handlePressScoreboardBox}>
          <GameOverview
            header="Scoreboard"
            data={limitedScoreboardData}
            type={EGameOverviewType.Scoreboard}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
    backgroundColor: "transparent",
  },
  gameCards: {
    padding: 20,
    flex: 1,
  },
});
