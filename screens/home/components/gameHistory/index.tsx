import { StyleSheet } from "react-native";

import { DatePicker } from "@/shared/ui/datePicker";
import { GameHistoryList } from "@/shared/ui/gameHistoryList";
import { View } from "@/shared/ui/themed/view";

import { historyData } from "../../data";

// TODO: Remove this line and use your own data model

const GameHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <DatePicker />
      <GameHistoryList data={historyData} />
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
export default GameHistoryScreen;
