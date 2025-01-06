import { GestureHandlerRootView } from "react-native-gesture-handler";

import { FriendsScreen } from "@/screens/friends";

const Friends = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FriendsScreen />
    </GestureHandlerRootView>
  );
};

export default Friends;
