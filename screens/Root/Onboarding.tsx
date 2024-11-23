import { StyleSheet } from "react-native";
import { OnboardingSlide } from "./components/OnboardingSlide";
import SafeAreaView from "@/shared/components/themed/SafeAreaView";

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
