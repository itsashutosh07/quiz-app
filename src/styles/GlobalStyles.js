import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.6;
    transition: background 0.3s ease, color 0.3s ease;
    padding: ${({ theme }) => theme.padding};
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    font-family: inherit;
  }
`;
