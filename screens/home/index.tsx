import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import { StatisticsCard } from "@/screens/home/components/statisticCard";
import { SafeAreaView } from "@/shared/ui/themed/safeAreaView";
import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";

import { useScreenSize } from "../../shared/hooks/useScreenSize";
import { GameOverview } from "./components/gameOverview";
import { EGameOverviewType } from "./constants";
//  TODO: import data from data.ts
import { historyData, scoreboardData } from "./data";
import { getDataByScreenSize } from "./helpers/getDataByScreenSize";

export const HomeScreen = () => {
  const router = useRouter();
  const { isSmallScreen } = useScreenSize();

  const limitedScoreboardData = getDataByScreenSize(
    scoreboardData,
    isSmallScreen
  );

  const limitedHistoryData = getDataByScreenSize(historyData, isSmallScreen);

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
          data={limitedHistoryData}
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
