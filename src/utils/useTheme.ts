import { useContext } from "react";
import { MyContext } from "../context/MyContext";

export const useTheme = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a MyContextProvider");
  }

  return context;
};
