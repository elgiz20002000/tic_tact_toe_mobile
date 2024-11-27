import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

import Button from "@/shared/components/button";
import SafeAreaView from "@/shared/components/themed/SafeAreaView";
import Text from "@/shared/components/themed/Text";
import View from "@/shared/components/themed/View";
import { useTheme } from "@/shared/contexts/Theme";

const ConnectionError = () => {
  const router = useRouter();
  const theme = useTheme();

  const onReload = useCallback(() => {
    router.replace("/auth/preparing");
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Internet Connection Unavailable</Text>
      </View>
      <Button
        onPress={onReload}
        leftIcon={<AntDesign color={theme.icon} name="reload1" size={24} />}
        text="Try Again"
      />
    </SafeAreaView>
  );
};

export default ConnectionError;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
