import { Stack } from "expo-router";

import { useTheme } from "@/shared/contexts/Theme";

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
          headerShown: true,
          headerTitle: "",
          headerBackTitle: "Scoreboard",
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
