import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./contexts/providers/ThemeContextProvider.tsx";
import { FavContextProvider } from "./contexts/providers/FavContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
