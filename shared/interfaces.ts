import { Href } from "expo-router";

export interface IColorsScheme {
  text: string;
  textGray: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  slider: ISliderColors;
  cardBackgroundColor: string;
  green: string;
  red: string;
  orange: string;
  backgroundGray: string;
  backgroundWhite: string;
  blue: string;
}

export interface ISliderColors {
  dotBackground: string;
  selectedDotBackground: string;
  background: string;
}

export interface ICompareModal{
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  name: string;
}

export type IRoute = Record<string, Href>;
