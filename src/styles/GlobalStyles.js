import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset and Base Styling */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.6;
    padding: ${({ theme }) => theme.padding};
    transition: background 0.3s ease, color 0.3s ease;
    animation: ${fadeIn} 0.5s ease-in-out;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
