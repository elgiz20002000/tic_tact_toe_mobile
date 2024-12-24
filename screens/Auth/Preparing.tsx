import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

import { Text } from "@/shared/components/themed/Text";
import { View } from "@/shared/components/themed/View";

import { getMessageByStep } from "./helpers/getMessageByStep";

export const PreparingScreen = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const isFocused = useIsFocused();
  const getMessage = useCallback(() => getMessageByStep(step), [step]);

  useEffect(() => {
    if (!isFocused) return;
    const interval = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep >= 4) {
          clearInterval(interval);
          router.replace("/(main)/home");
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
