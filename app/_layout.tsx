import { Stack } from "expo-router";

import { ThemeProvider } from "@/shared/contexts/theme";

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
