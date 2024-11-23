import Onboarding from "react-native-onboarding-swiper";
import { StyleSheet } from "react-native";
import { Spacing } from "@/shared/constants/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { CustomDot } from "./CustomDot";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import useOnboardingPages from "../constants";
import { useTheme } from "@/shared/contexts/Theme";
import Text from "@/shared/components/themed/Text";

export const OnboardingSlide = () => {
  const sharedOpacity = useSharedValue(1);
  const router = useRouter();
  const theme = useTheme();
  const onboardingPages = useOnboardingPages();

  const handleDone = useCallback(() => {
    sharedOpacity.value = withTiming(0, { duration: 300 });
    router.push("/auth/login");
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
