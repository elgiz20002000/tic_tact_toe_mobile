import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { Colors } from "@/shared/constants/colors";

import { Text } from "../themed/text";
import { IButton } from "./interfaces";

export const Button: FC<IButton> = ({ text, onPress, rightIcon, leftIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {leftIcon}
      <Text style={styles.buttonText}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "90%",
    padding: 19,
    borderWidth: 1,
    borderColor: Colors.light.textGray,
    borderBlockColor: Colors.light.textGray,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  buttonText: {
    textAlign: "center",
  },
});
