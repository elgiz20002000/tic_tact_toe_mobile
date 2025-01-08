import { ViewProps } from "react-native";
import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";

import { useTheme } from "@/shared/contexts/theme";

export const SafeAreaView = (props: ViewProps) => {
  const theme = useTheme();
  const { style, ...restProps } = props;

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor: theme.background }, style]}
      {...restProps}
    />
  );
};
