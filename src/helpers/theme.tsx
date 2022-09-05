import { createGlobalStyle } from 'styled-components';
import { HeroData } from '@/helpers/types';

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
    font-weight: 500;
    text-size-adjust: 100%;
  }
  body,
  header,
  footer,
  main,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  p,
  span,
  a,
  ul,
  li, 
  figure {
    background: none;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    outline: none;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }
  html {
    @media only screen and (orientation: portrait) and (max-width: 768px) {
      height: 100%;
      overflow: hidden;
      pointer-events: none;
      touch-action: none;
      width: 100%;
    }
  }
  body {
    background-color: #282828;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
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
  neutralLight: '#BCBCBC',
  neutral: '#757575',
  dark: '#282828',
  alphaDark_65: 'rgba(0,0,0,0.65)',
  alphaDark_75: 'rgba(0,0,0,0.75)',
};

export const colorTheme = {
  blue: '#18629e',
  grey: '#56688a',
  orange: '#e47711',
  red: '#c01518',
  green: '#09a609',
  yellow: '#df9a1a',
  silver: '#7d878d',
};

export const semiTransparentColorTheme = {
  semiTransparentBlue: 'rgba(24, 98, 158, 0.5)',
  semiTransparentGrey: 'rgba(86, 104, 138, 0.5)',
  semiTransparentOrange: 'rgba(228, 119, 17, 0.35)',
  semiTransparentRed: 'rgba(192, 21, 24, 0.3)',
  semiTransparentGreen: 'rgba(9, 166, 9, 0.3)',
  semiTransparentYellow: 'rgba(223, 154, 26, 0.3)',
  semiTransparentSilver: 'rgba(125, 135, 141, 0.5)',
};

export const theme = {
  ...neutralTheme,
  ...colorTheme,
  ...semiTransparentColorTheme,
};

export const heroColors: HeroData = {
  superman: theme.blue,
  batman: theme.grey,
  wonderwoman: theme.orange,
  flash: theme.red,
  greenlantern: theme.green,
  aquaman: theme.yellow,
  cyborg: theme.silver,
};

export const heroSemiTransparentColors: HeroData = {
  superman: theme.semiTransparentBlue,
  batman: theme.semiTransparentGrey,
  wonderwoman: theme.semiTransparentOrange,
  flash: theme.semiTransparentRed,
  greenlantern: theme.semiTransparentGreen,
  aquaman: theme.semiTransparentYellow,
  cyborg: theme.semiTransparentSilver,
};

export const getRandomHeroColor = (): string => {
  const colorsList = Object.values(colorTheme);
  const randomColorIndex = Math.floor(Math.random() * (colorsList.length - 1));

  return colorsList[randomColorIndex];
};
