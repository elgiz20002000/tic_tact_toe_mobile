import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet } from "react-native";

import { Button } from "@/shared/ui/button";
import { SafeAreaView } from "@/shared/ui/themed/safeAreaView";
import { Text } from "@/shared/ui/themed/text";
import { View } from "@/shared/ui/themed/view";
import { useTheme } from "@/shared/contexts/theme";

const ConnectionError = () => {
  const router = useRouter();
  const theme = useTheme();

  const onReload = useCallback(() => {
    router.replace("/(auth)/preparing");
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

export default ConnectionError;
