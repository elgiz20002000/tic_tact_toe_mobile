import { GestureHandlerRootView } from "react-native-gesture-handler";

import { OnlinePlayersScreen } from "@/screens/onlinePlayers";

const OnlinePlayers = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OnlinePlayersScreen />
    </GestureHandlerRootView>
  );
};

export default OnlinePlayers;
