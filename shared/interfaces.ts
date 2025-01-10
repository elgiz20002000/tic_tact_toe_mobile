import { Href } from "expo-router";

export interface IColorsScheme {
  text: string;
  textGray: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  inputText: string;
  slider: ISliderColors;
  cardBackgroundColor: string;
  green: string;
  white: string;
  red: string;
  orange: string;
  backgroundGray: string;
  backgroundWhite: string;
  bottomNavigationTab: IBottomNavigationTab;
  blue: string;
  black: string;
  lightGray: string;
  box: IBox;
  datePickerBackgroundColor: string;
}

export interface IBottomNavigationTab {
  activeColor: string;
  inactiveColor: string;
  background: string;
}
export interface IBox {
  background: string;
  icon: string;
  blurBackgroundX: string
  blurBackgroundO: string,
  grayBackground: string

}
export interface ISliderColors {
  dotBackground: string;
  selectedDotBackground: string;
  background: string;
}

export interface ICompareModal {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
}


export type IRoute = Record<string, Href>;
