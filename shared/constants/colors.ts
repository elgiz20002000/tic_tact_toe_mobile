import { IColorsScheme } from "@/shared/interfaces";

const tintColorLight = "#46A3FF";
const tintColorDark = "#fff";

export const Colors: {
  light: IColorsScheme;
  dark: IColorsScheme;
} = {
  light: {
    text: "#11181C",
    textGray: "#ADADAD",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    cardBackgroundColor: "#f5f5f5",
    tabIconSelected: tintColorLight,
    inputText: "#11181C",
    green: "#00C096",
    red: "#FF827E",
    white: "#fff",
    orange: "#FFB048",
    blue: "#46A3FF",
    backgroundGray: "#E3E3E3",
    backgroundWhite: "#fff",
    black: "#000",
    lightGray: "#F1F1F1",
    datePickerBackgroundColor: "#00000080",
    bottomNavigationTab: {
      activeColor: "#ffffff",
      inactiveColor: "#2475C5",
      background: "#46A3FF",
    },
    slider: {
      dotBackground: "#E3E3E3",
      selectedDotBackground: "#46A3FF",
      background: "#fff",
    },
    box: {
      background: "#F1F1F1",
      icon:"#000"
    },
  },
  dark: {
    text: "#ADADAD",
    textGray: "#ADADAD",
    background: "#0C1017",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    cardBackgroundColor: "#fff",
    tabIconSelected: tintColorDark,
    inputText: "#fff",
    green: "#00C096",
    red: "#FF827E",
    white: "#fff",
    orange: "#FFB048",
    blue: "#46A3FF",
    backgroundGray: "#9BA1A6",
    backgroundWhite: "#9BA1A6",
    black: "#000",
    lightGray: "#9BA1A6",
    pickerBackgroundColor: "#12161F",
    bottomNavigationTab: {
      activeColor: "#ADADAD",
      inactiveColor: "#12161F",
      background: "#212835",
    },
    slider: {
      dotBackground: "#E3E3E3",
      selectedDotBackground: "#46A3FF",
      background: "#fff",
    },
    box: {
      background: "#12161F",
      icon:"#ADADAD"
    },
  },
};

const SPACING_BASE = 8;

export const Spacing = (value: number) => value * SPACING_BASE;
