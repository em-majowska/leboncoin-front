import { createContext } from "react";
import type { TSetState } from "../types";

type TTheme = "light" | "dark";

type TThemeContext = {
  theme: TTheme;
  setTheme: TSetState<TTheme>;
};

export const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  setTheme: () => {},
});
