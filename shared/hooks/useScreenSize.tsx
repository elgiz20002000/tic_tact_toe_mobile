import { Dimensions } from "react-native";

export const useScreenSize = () => {
  const { height: screenHeight } = Dimensions.get("window");

  const isSmallScreen = screenHeight <= 870;

  return {
    isSmallScreen,
    screenHeight,
  };
};
