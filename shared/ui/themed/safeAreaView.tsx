import { SafeAreaView as DefaultSafeAreaView, ViewProps } from "react-native";

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
