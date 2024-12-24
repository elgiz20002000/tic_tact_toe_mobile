import { Tabs } from "expo-router";

import BottomTabBar from "@/shared/components/bottomTabBar";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabBar {...props} />}
    />
  );
}
