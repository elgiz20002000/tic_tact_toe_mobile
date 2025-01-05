import { StyleSheet } from "react-native";

import { SafeAreaView } from "@/shared/components/themed/safeAreaView";

import { OnboardingSlide } from "./components/onboardingSlide";

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OnboardingSlide />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default OnboardingScreen;
