import { StyleSheet } from "react-native";

import { DatePicker } from "@/shared/components/datePicker";
import { GameHistoryList } from "@/shared/components/gameHistoryList";
import { View } from "@/shared/components/themed/View";

// TODO: Remove this line and use your own data model
import { historyData } from "../../data";

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
