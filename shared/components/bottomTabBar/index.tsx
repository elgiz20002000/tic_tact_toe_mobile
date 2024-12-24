import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/shared/contexts/Theme";

import TabBarButton from "./button";

const BottomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  const theme = useTheme();
  const inserts = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabbar,
        {
          bottom: inserts.bottom,
          backgroundColor: theme.bottomNavigationTab.background,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={
              isFocused
                ? theme.bottomNavigationTab.activeColor
                : theme.bottomNavigationTab.inactiveColor
            }
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    zIndex: 0,
  },
});

export default BottomTabBar;
