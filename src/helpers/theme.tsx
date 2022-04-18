import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: '#282828';
    box-sizing: border-box;
    font-family: 'Cinzel', sans-serif;
    font-size: 14px;
    font-weight: 400;
    min-height: 100vh;
    text-size-adjust: 100%;
  }
  body,
  header,
  footer,
  main,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  p,
  a,
  ul {
    background: none;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    overflow: hidden;
  },
  img {
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
`;

export const neutralTheme = {
  light: '#FFFFFF',
  neutral: '#757575',
  lightNeutral: '#BCBCBC',
  dark: '#282828',
  alphaDark: 'rgba(0,0,0,0.6)',
};

export const colorTheme = {
  blue: '#10548c',
  grey: '#56688a',
  orange: '#e47711',
  red: '#c01518',
  greenLight: '#09a609',
  greenDark: '#0d5f0f',
  yellow: '#df9a1a',
  redDark: '#6a0608',
};

export const theme = {
  ...neutralTheme,
  ...colorTheme,
};

export const getRandomHeroColor = () => {
  const colorsList = Object.values(colorTheme);
  const randomColorIndex = Math.floor(Math.random() * (colorsList.length - 1));

  return colorsList[randomColorIndex];
};
