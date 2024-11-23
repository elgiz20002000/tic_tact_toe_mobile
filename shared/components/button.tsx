import { StyleSheet, TouchableOpacity } from "react-native";
import React, { FC, ReactNode } from "react";
import { Colors } from "@/shared/constants/Colors";
import Text from "./themed/Text";

interface IButton {
  text: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}

const Button: FC<IButton> = ({ text, onPress, rightIcon, leftIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {leftIcon}
      <Text style={styles.buttonText}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export default Button;

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
