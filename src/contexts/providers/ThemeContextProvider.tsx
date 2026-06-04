import { useState, type ReactNode } from "react";
import { ThemeContext } from "../ThemeContext";
import type { TTheme } from "../../types";

type TThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: TThemeContextProviderProps) => {
  const [theme, setTheme] = useState<TTheme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
