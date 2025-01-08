import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Text } from "@/shared/ui/themed/text";
import { Spacing } from "@/shared/constants/colors";
import { useTheme } from "@/shared/contexts/theme";

import useOnboardingPages from "../constants";
import { CustomDot } from "./customDot";

export const OnboardingSlide = () => {
  const sharedOpacity = useSharedValue(1);
  const router = useRouter();
  const theme = useTheme();
  const onboardingPages = useOnboardingPages();

  const handleDone = useCallback(() => {
    sharedOpacity.value = withTiming(0, { duration: 300 });
    router.replace("/(auth)/login");
  }, [router, sharedOpacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: sharedOpacity.value,
  }));

  return (
    <Animated.View style={[{ flex: 1 }, animatedStyle]}>
      <Onboarding
        containerStyles={{
          ...styles.container,
          backgroundColor: theme.background,
        }}
        subTitleStyles={{ ...styles.subTitle, color: theme.text }}
        titleStyles={{ color: theme.text }}
        bottomBarHighlight={true}
        bottomBarColor={theme.background}
        nextLabel={<Text>Next</Text>}
        DotComponent={CustomDot}
        pages={onboardingPages}
        showSkip={false}
        onDone={handleDone}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: Spacing(3),
  },
  subTitle: {
    paddingHorizontal: Spacing(1),
  },
});
