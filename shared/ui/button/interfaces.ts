import { ReactNode } from "react";

export interface IButton {
  text: string;
  onPress?: () => void;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}