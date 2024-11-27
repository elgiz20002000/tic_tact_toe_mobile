import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Image, StyleSheet } from "react-native";

import FaceBookIcon from "@/assets/images/facebook.png";
import GoogleIcon from "@/assets/images/google.png";
import Button from "@/shared/components/button";
import SafeAreaView from "@/shared/components/themed/SafeAreaView";
import Text from "@/shared/components/themed/Text";
import View from "@/shared/components/themed/View";
import { Colors } from "@/shared/constants/Colors";

import AuthLogo from "./components/AuthLogo";

export const LoginScreen = () => {
  const router = useRouter();

  const onAuthByProviders = useCallback(() => {
    router.replace("/auth/preparing");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <View style={styles.welcomeContentContainer}>
          <AuthLogo style={styles.img} />
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
