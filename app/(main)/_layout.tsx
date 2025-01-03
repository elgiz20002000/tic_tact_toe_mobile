import { Tabs, useSegments } from "expo-router";
import { useEffect, useState } from "react";

import BottomTabBar from "@/shared/components/bottomTabBar";

export default function RootLayout() {
  const segments = useSegments();
  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    const currentPath = segments.join("/");
    setShowTabBar(currentPath !== "(main)/(home)/scoreboard");
  }, [segments]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: showTabBar ? undefined : { display: "none" },
      }}
      tabBar={(props) => showTabBar && <BottomTabBar {...props} />}
    />
  );
}
