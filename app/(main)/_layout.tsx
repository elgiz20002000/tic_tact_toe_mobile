import BottomTabBar from "@/shared/components/bottomTabBar";
import { Tabs } from "expo-router";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";



export default function RootLayout() {
  return (
    
    <Tabs screenOptions={{ headerShown: false }} 
    tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen name="home" options={{ tabBarIcon: ({color, size}) => <EntypoIcon name="home" color={color} size={size}/>}} />
      <Tabs.Screen name="onlinePlayers" options={{tabBarIcon: ({color, size}) => <MaterialCommunityIcon name="gamepad" color={color} size={size}/>}} />
      <Tabs.Screen name="friends" options={{ tabBarIcon: ({color, size}) => <MaterialCommunityIcon name="account-group" color={color} size={size}/>}} />
    </Tabs>
  );
}
