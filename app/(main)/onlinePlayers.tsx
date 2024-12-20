import { OnlinePlayersScreen } from "@/screens/OnlinePlayers";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const OnlinePlayers = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OnlinePlayersScreen />
    </GestureHandlerRootView>
  );
};

export default OnlinePlayers;
