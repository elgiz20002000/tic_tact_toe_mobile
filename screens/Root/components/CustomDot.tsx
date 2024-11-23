import { Spacing } from "@/shared/constants/Colors";
import { useTheme } from "@/shared/contexts/Theme";
import { FC, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { DotProps } from "react-native-onboarding-swiper";

export const CustomDot: FC<DotProps> = ({ selected }) => {
  const theme = useTheme();
  const dotStyle = useCallback(
    (selected: boolean) => {
      if (selected) {
        return {
          backgroundColor: theme.slider.selectedDotBackground,
        };
      }
      return {
        backgroundColor: theme.slider.dotBackground,
      };
    },
    [theme]
  );

  return <View style={[styles.dot, dotStyle(selected)]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 8,
    marginHorizontal: Spacing(0.5),
  },
});
