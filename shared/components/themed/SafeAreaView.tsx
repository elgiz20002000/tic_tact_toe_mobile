import { useTheme } from "@/shared/contexts/Theme";
import { SafeAreaView as DefaultSafeAreaView, ViewProps } from "react-native";

const SafeAreaView = (props: ViewProps) => {
  const theme = useTheme();

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor: theme.background }, props.style]}
      {...props}
    />
  );
};

export default SafeAreaView;
