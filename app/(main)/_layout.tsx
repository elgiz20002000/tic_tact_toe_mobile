import { Tabs } from "expo-router";
import homeIcon from '@/assets/svg/Vector.svg'
export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: homeIcon}} />
    </Tabs>
  );
}
