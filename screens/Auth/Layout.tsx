import { useTheme } from "@/shared/contexts/Theme";
import { Stack } from "expo-router";

export default function Layout() {
  const theme = useTheme();

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: theme.background,
          },
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="preparing" options={{ headerShown: false }} />
        <Stack.Screen name="connectionError" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
