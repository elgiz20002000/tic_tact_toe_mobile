import { View as DefaultView, ViewProps } from "react-native";

import { useTheme } from "@/shared/contexts/Theme";

export const View = (props: ViewProps) => {
  const theme = useTheme();
  const { style, ...restProps } = props;

  return (
    <DefaultView
      style={[{ backgroundColor: theme.background }, style]}
      {...restProps}
    />
  );
};
