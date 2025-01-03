import { Stack } from "expo-router";

import { useTheme } from "@/shared/contexts/theme";

export default function HomeLayout() {
  const theme = useTheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="scoreboard"
        options={{
          headerTitle: "",
          headerBackTitle: "Scoreboard",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }}
      />
      <Stack.Screen
        name="gameHistory"
        options={{
          headerTitle: "",
          headerBackTitle: "Game History",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }}
      />
    </Stack>
  );
}
