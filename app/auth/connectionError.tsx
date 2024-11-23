import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import Button from "@/shared/components/button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const ConnectionError = () => {
  const router = useRouter();

  const onReload = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Internet Connection Unavailable</Text>
      </View>
      <Button
        onPress={onReload}
        leftIcon={<AntDesign name="reload1" size={24} />}
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
