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
    green: '#00C096',
    red: '#FF827E',
    orange: "#FFB048",
    blue: "#46A3FF",
    backgroundGray: "#E3E3E3",
    backgroundWhite: '#fff',
    slider: {
      dotBackground: "#E3E3E3",
      selectedDotBackground: "#46A3FF",
      background: "#fff",
    },
  },
  dark: {
    text: "#ADADAD",
    textGray: "#ADADAD",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    cardBackgroundColor: "#fff",
    tabIconSelected: tintColorDark,
    green: '#9BA1A6',
    red: '#9BA1A6',
    orange: "#9BA1A6",
    blue:"#9BA1A6",
    backgroundGray: "#9BA1A6",
    backgroundWhite: '#9BA1A6',
    slider: {
      dotBackground: "#E3E3E3",
      selectedDotBackground: "#46A3FF",
      background: "#fff",
    },
  },
};

const SPACING_BASE = 8;

export const Spacing = (value: number) => value * SPACING_BASE;
