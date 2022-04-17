import { DefaultTheme, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: 'Cinzel', sans-serif;
    font-size: 14px;
    font-weight: 400;
    min-height: 100vh;
    text-size-adjust: 100%;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  p,
  ul {
    background: none;
    border: 0;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  img {
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }
`;

export const theme = {
  text: '#FFFFFF',
  neutral: '#757575',
  dark: '#000000',
  blueSuperman: '#10548c',
  greyBatman: '#56688a',
  orangeWonder: '#e47711',
  redFlash: '#c01518',
  greenLantern: '#09a609',
  greenArrow: '#0d5f0f',
  yellowAquaman: '#df9a1a',
  redCyborg: '#9e0306',
};
