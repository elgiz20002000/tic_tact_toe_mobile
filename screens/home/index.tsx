import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import { StatisticsCard } from "@/screens/home/components/statisticCard";
import { SafeAreaView } from "@/shared/components/themed/safeAreaView";
import { Text } from "@/shared/components/themed/text";
import { View } from "@/shared/components/themed/view";

import { GameOverview } from "./components/gameOverview";
import { EGameOverviewType } from "./constants";
//  TODO: import data from data.ts
import { historyData, scoreboardData } from "./data";

export const HomeScreen = () => {
  const router = useRouter();
  const limitedScoreboardData = scoreboardData.slice(0, 5);

  const handlePressScoreboardBox = () => {
    router.push("/(main)/(home)/scoreboard");
  };
  const handlePressGameHistoryBox = () => {
    router.push("/(main)/(home)/gameHistory");
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
          onPress={handlePressGameHistoryBox}
          header="Game History"
          data={historyData}
          type={EGameOverviewType.History}
        />
        <GameOverview
          onPress={handlePressScoreboardBox}
          header="Scoreboard"
          data={limitedScoreboardData}
          type={EGameOverviewType.Scoreboard}
        />
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
