import { Stack } from "expo-router";

import { ThemeProvider } from "@/shared/contexts/Theme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
