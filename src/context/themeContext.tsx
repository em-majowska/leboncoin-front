import { createContext, useState, type ReactNode } from "react";
import type { TSetState } from "../types";

type TTheme = "light" | "dark";

type TThemeContext = {
  theme: TTheme;
  setTheme: TSetState<TTheme>;
};

const ThemeContext = createContext<TThemeContext>({
  theme: "light",
  setTheme: () => {},
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
