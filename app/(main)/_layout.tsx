import { Tabs } from "expo-router";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";



export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home", tabBarIcon: ({color, size}) => <EntypoIcon name="home" color={color} size={size}/>}} />
      <Tabs.Screen name="onlinePlayers" options={{ title: "Online Players", tabBarIcon: ({color, size}) => <MaterialCommunityIcon name="gamepad" color={color} size={size}/>}} />
    </Tabs>
  );
}
