import onboarding_1 from "@/assets/images/onboarding_1.png";
import onboarding_2 from "@/assets/images/onboarding_2.png";
import onboarding_3 from "@/assets/images/onboarding_3.png";
import { useTheme } from "@/shared/contexts/Theme";
import { useMemo } from "react";
import { Image } from "react-native";

const imageStyle = { width: 200, height: 200 };

const useOnboardingPages = () => {
  const theme = useTheme();

  return useMemo(
    () => [
      {
        backgroundColor: theme.slider.background,
        image: (
          <Image
            source={onboarding_1}
            style={imageStyle}
            resizeMode="contain"
          />
        ),
        title: "Welcome",
        subtitle:
          "One of the oldest world games now available on your smartphone device!",
      },
      {
        backgroundColor: theme.slider.background,
        image: (
          <Image
            source={onboarding_2}
            style={imageStyle}
            resizeMode="contain"
          />
        ),
        title: "Compete",
        subtitle:
          "Play the game with your friends, and prove that you’re a worthy opponent!",
      },
      {
        backgroundColor: theme.slider.background,
        image: (
          <Image
            source={onboarding_3}
            style={imageStyle}
            resizeMode="contain"
          />
        ),
        title: "Scoreboard",
        subtitle:
          "Earn points and make your own way to the top of the scoreboard!",
      },
    ],
    [theme]
  );
};

export default useOnboardingPages;
