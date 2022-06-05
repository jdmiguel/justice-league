import { createGlobalStyle, keyframes } from 'styled-components';
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
    min-height: 100vh;
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
  body {
    overflow: hidden;
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
  blue: '#10548c',
  grey: '#56688a',
  orange: '#e47711',
  red: '#c01518',
  green: '#09a609',
  yellow: '#df9a1a',
  darkGreen: '#0d5f0f',
  darkRed: '#820e10',
};

export const theme = {
  ...neutralTheme,
  ...colorTheme,
};

export const heroColors: HeroData = {
  superman: theme.blue,
  batman: theme.grey,
  wonderwoman: theme.orange,
  flash: theme.red,
  greenlantern: theme.green,
  aquaman: theme.yellow,
  greenarrow: theme.darkGreen,
  cyborg: theme.darkRed,
};

export const getRandomHeroColor = (): string => {
  const colorsList = Object.values(colorTheme);
  const randomColorIndex = Math.floor(Math.random() * (colorsList.length - 1));

  return colorsList[randomColorIndex];
};

export const animation = {
  greet: keyframes`
    0%,100% { transform: rotate(0); }
    20%,60% { transform: rotate(-25deg); }
    40%,80% { transform: rotate(10deg); }
  `,
  noise: keyframes`
    0% { transform: translate(-10%, 10%); }
    10% { transform: translate(-25%); }
    20% { transform: translate(-30%, 10%); }
    30% { transform: translate(-30%, 30%); }
    40% { transform: translate(); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(-20%, 20%); }
    70% { transform: translate(-5%, 20%); }
    80% { transform: translate(-25%, 5%); }
    90% { transform: translate(-30%, 25%); }
    100% { transform: translate(-10%, 10%); }
  `,
  wave: keyframes`
    0% {
      background: transparent;
      transform: scaleY(0.1);
    }
    50% {
      background: ${theme.neutral};
      transform: scaleY(1);
    }
    100% {
      background: transparent;
      transform: scaleY(0.1);
    }
  `,
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
  minFadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.1;
    }
  `,
  scaleIn: keyframes`
    0% {
      opacity: 0;
      transform: scale(1.3);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
 `,
  up: keyframes`
    0% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(0);
    }
  `,
  down: keyframes`
    0% {
      transform: translateY(-120px);
    }
    100% {
      transform: translateY(0);
    }
  `,
};

export const ease = {
  medium: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  smooth: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
};
