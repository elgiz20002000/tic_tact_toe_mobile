import { StyleSheet } from "react-native";

import ScoreboardList from "@/shared/components/scoreboardList";
import SearchBar from "@/shared/components/searchBar";
import { View } from "@/shared/components/themed/view";

// TODO: Remove this line and use your own data model
import { scoreboardData } from "../../data";

const ScoreboardScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScoreboardList data={scoreboardData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
  },
});
export default ScoreboardScreen;
