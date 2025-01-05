import { Stack } from "expo-router";

import { useTheme } from "@/shared/contexts/theme";

export default function Layout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerShown: false,
      }}
    />
  );
}
