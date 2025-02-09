import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import Header from "./components/Header";
import useLocalStorage from './hooks/useLocalStorage'; // Import the custom hook for localStorage persistence

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme"; // Import the theme (can be swapped to darkTheme later)

/**
 * Main component is the top-level component that manages the theme state.
 * It provides a toggle function to switch between light and dark themes.
 * The selected theme is passed to ThemeProvider so that all styled-components have access.
 * The BrowserRouter is used for client-side routing.
 */
const Main = () => {
  // State to hold the current theme mode; "light" or "dark"
  const [themeMode, setThemeMode] = useLocalStorage("theme", "dark");

  /**
   * toggleTheme toggles between light and dark modes.
   * It also logs the theme change for debugging purposes.
   */
  const toggleTheme = () => {
    const newMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(newMode);
    console.info(`Theme toggled to ${newMode}`);
  };

  // Determine the current theme object based on themeMode
  const currentTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        {/* GlobalStyles and all styled-components now have access to the current theme */}
        <GlobalStyles />
        {/* Header receives the current theme mode and the toggle function */}
        <Header theme={themeMode} toggleTheme={toggleTheme} />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

// Render the Main component into the root element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
