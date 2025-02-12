import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
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
    animation: ${fadeIn} 0.5s ease-in-out;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
  }
`;
