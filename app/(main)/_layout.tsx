import { Tabs, useSegments } from "expo-router";
import { useEffect, useState } from "react";

import { pathsToNotShowBottomBar } from "@/shared/constants/router";
import BottomTabBar from "@/shared/ui/bottomTabBar";

export default function RootLayout() {
  const segments = useSegments();
  const [showTabBar, setShowTabBar] = useState(true);

  useEffect(() => {
    const currentPath = segments.join("/");
    setShowTabBar(!pathsToNotShowBottomBar.includes(currentPath));
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
