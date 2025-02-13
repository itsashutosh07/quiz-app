import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import App from "./App";
import NavBar from "./components/NavBar";
import { darkTheme, lightTheme } from "./styles/theme";
import useLocalStorage from "./hooks/useLocalStorage";
import "./index.css";

const Main = () => {
  // Persist theme mode using our custom hook; default is dark.
  const [themeMode, setThemeMode] = useLocalStorage("theme", "dark");
  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    console.info(`Theme toggled to ${newMode}`);
  };
  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <NavBar themeMode={themeMode} toggleTheme={toggleTheme} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
