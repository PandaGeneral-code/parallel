import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
