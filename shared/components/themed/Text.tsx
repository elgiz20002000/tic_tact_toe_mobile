import { Text as DefaultText, TextProps } from "react-native";

import { useTheme } from "@/shared/contexts/Theme";

const Text = (props: TextProps) => {
  const theme = useTheme();

  const { style, ...otherProps } = props;

  return <DefaultText style={[{ color: theme.text }, style]} {...otherProps} />;
};

export default Text;
