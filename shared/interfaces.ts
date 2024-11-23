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
}

export interface ISliderColors {
  dotBackground: string;
  selectedDotBackground: string;
  background: string;
}

export type IRoute = Record<string, Href>;
