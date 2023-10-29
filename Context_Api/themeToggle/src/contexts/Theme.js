import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "Light",
  darkTheme: () => {},
  lightTheme: () => {},
}); //we give default value in createContext('Initial Value)

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
