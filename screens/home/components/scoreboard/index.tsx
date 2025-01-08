import { StyleSheet } from "react-native";

import ScoreboardList from "@/shared/ui/scoreboardList";
import SearchBar from "@/shared/ui/searchBar";
import { View } from "@/shared/ui/themed/view";

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
