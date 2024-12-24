import { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { RouterIcons } from "./constants";
import { ITabBarButton } from "./interface";

const TabBarButton = (props: ITabBarButton) => {
  const { isFocused, routeName, color } = props;

  const scale = useSharedValue(0);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 1.4]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  useEffect(() => {
    scale.value = withSpring(isFocused ? 1 : 0, {
      duration: 350,
    });
  }, [scale, isFocused]);

  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {RouterIcons[routeName]({
          color,
        })}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default TabBarButton;
