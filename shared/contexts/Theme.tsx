import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";

import { Colors } from "@/shared/constants/Colors";

import { IColorsScheme } from "../interfaces";

const ThemeContext = createContext({} as IColorsScheme);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    systemColorScheme === "dark" ? Colors.dark : Colors.light
  );

  useEffect(() => {
    setTheme(systemColorScheme === "dark" ? Colors.dark : Colors.light);
  }, [systemColorScheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
