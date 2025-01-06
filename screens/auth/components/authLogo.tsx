import { Image, ImageProps, useColorScheme } from "react-native";

import authLogo from "@/assets/images/auth_logo.png";
import authLogoDark from "@/assets/images/auth_logo_dark.png";

const AuthLogo = (props: ImageProps) => {
  const colorScheme = useColorScheme();
  const currentImg = colorScheme === "dark" ? authLogoDark : authLogo;

  return <Image source={currentImg} style={props.style} />;
};

export default AuthLogo;
