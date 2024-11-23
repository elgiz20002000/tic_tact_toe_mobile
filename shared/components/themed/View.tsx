import { useTheme } from "@/shared/contexts/Theme";
import { View as DefaultView, ViewProps } from "react-native";

const View = (props: ViewProps) => {
  const theme = useTheme();

  return (
    <DefaultView
      style={[{ backgroundColor: theme.background }, props.style]}
      {...props}
    />
  );
};

export default View;
