import { Text as DefaultText, TextProps } from "react-native";

import { useTheme } from "@/shared/contexts/theme";

export const Text = (props: TextProps) => {
  const theme = useTheme();

  const { style, ...otherProps } = props;

  return <DefaultText style={[{ color: theme.text }, style]} {...otherProps} />;
};
