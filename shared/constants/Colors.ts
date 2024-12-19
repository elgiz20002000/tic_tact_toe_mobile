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
    greenText: "#00C096",
    redText: "#FF827E",
    orangeText: "#FFB048",
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
    greenText: "#9BA1A6",
    redText: "#9BA1A6",
    orangeText: "#9BA1A6",
    slider: {
      dotBackground: "#E3E3E3",
      selectedDotBackground: "#46A3FF",
      background: "#fff",
    },
  },
};

const SPACING_BASE = 8;

export const Spacing = (value: number) => value * SPACING_BASE;
