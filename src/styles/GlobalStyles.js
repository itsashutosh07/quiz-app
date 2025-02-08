import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f4f6f8;
    color: #333;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  }
`;
