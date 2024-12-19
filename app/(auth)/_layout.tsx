import { Stack } from "expo-router";
import { useTheme } from "@/shared/contexts/Theme";

export default function RootLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.background,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="preparing" />
      <Stack.Screen name="connectionError" />
    </Stack>
  );
}
