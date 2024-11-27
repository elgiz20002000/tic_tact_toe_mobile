import { StyleSheet } from "react-native";

import SafeAreaView from "@/shared/components/themed/SafeAreaView";

import { OnboardingSlide } from "./components/OnboardingSlide";

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
