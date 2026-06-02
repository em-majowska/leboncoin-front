import { createContext, useState, type ReactNode } from "react";
import type { TTheme, TThemeContext } from "../types";

const MyContext = createContext<TThemeContext | undefined>(undefined);

const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<TTheme>("white");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
