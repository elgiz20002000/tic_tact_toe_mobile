import { useTheme } from "@/shared/contexts/Theme";
import { Text as DefaultText, TextProps } from "react-native";

const Text = (props: TextProps) => {
  const theme = useTheme();

  return (
    <DefaultText style={[{ color: theme.text }, props.style]} {...props} />
  );
};

export default Text;
