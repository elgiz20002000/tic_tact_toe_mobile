import { GestureHandlerRootView } from "react-native-gesture-handler";

import { OnlinePlayersScreen } from "@/screens/OnlinePlayers";

const OnlinePlayers = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OnlinePlayersScreen />
    </GestureHandlerRootView>
  );
};

export default OnlinePlayers;
