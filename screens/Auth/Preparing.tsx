import { StyleSheet, Text, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import { useRouter } from "expo-router";
import { getMessageByStep } from "./helpers/getMessageByStep";
import { useIsFocused } from "@react-navigation/native";

const PreparingScreen = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const isFocused = useIsFocused();
  const getMessage = useCallback(() => getMessageByStep(step), [step]);

  useEffect(() => {
    if (!isFocused) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !step && setStep(1);
    const interval = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep >= 4) {
          clearInterval(interval);
          router.push("/auth/connectionError");
          return prevStep;
        }
        return prevStep + 1;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text>{getMessage()}</Text>
      <Progress.Bar width={350} progress={step / 4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 12,
  },
});

export default PreparingScreen;
