import { Image, StyleSheet } from "react-native";
import authLogo from "@/assets/images/auth_logo.png";
import { Colors } from "@/shared/constants/Colors";
import Button from "@/shared/components/button";
import GoogleIcon from "@/assets/images/google.png";
import FaceBookIcon from "@/assets/images/facebook.png";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import SafeAreaView from "@/shared/components/themed/SafeAreaView";
import View from "@/shared/components/themed/View";
import Text from "@/shared/components/themed/Text";
import { useTheme } from "@/shared/contexts/Theme";

export const LoginScreen = () => {
  const router = useRouter();
  const theme = useTheme();

  console.log(theme, "theme");

  const onAuthByProviders = useCallback(() => {
    router.push("/auth/preparing");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeContentContainer}>
          <Image source={authLogo} style={styles.img} />
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.welcomeDesccription}>
            Please sign in to continue.
          </Text>
        </View>
      </View>

      <View style={styles.btnsContainer}>
        <Button
          onPress={onAuthByProviders}
          leftIcon={<Image source={GoogleIcon} />}
          text="Sign in with Google"
        />
        <Button
          onPress={onAuthByProviders}
          leftIcon={<Image source={FaceBookIcon} />}
          text="Sign in with Facebook"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 23,
    flex: 1,
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  welcomeContentContainer: {
    alignItems: "center",
  },
  img: {
    marginBottom: 42,
  },
  welcomeTitle: {
    fontWeight: "bold",
    fontSize: 27,
  },
  welcomeDesccription: {
    marginTop: 6,
    color: Colors.light.textGray,
    fontSize: 16,
  },
  btnsContainer: {
    gap: 14,
    alignItems: "center",
  },
});
