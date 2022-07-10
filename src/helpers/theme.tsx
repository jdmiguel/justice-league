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
  darkGreen: '#0d5f0f',
  darkRed: '#820e10',
};

export const semiTransparentColorTheme = {
  semiTransparentBlue: 'rgba(24, 98, 158, 0.5)',
  semiTransparentGrey: 'rgba(86, 104, 138, 0.5)',
  semiTransparentOrange: 'rgba(228, 119, 17, 0.35)',
  semiTransparentRed: 'rgba(192, 21, 24, 0.3)',
  semiTransparentGreen: 'rgba(9, 166, 9, 0.3)',
  semiTransparentYellow: 'rgba(223, 154, 26, 0.3)',
  semiTransparentDarkGreen: 'rgba(13, 95, 15, 0.5)',
  semiTransparentDarkRed: 'rgba(130, 14, 16, 0.4)',
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
  greenarrow: theme.darkGreen,
  cyborg: theme.darkRed,
};

export const heroSemiTransparentColors: HeroData = {
  superman: theme.semiTransparentBlue,
  batman: theme.semiTransparentGrey,
  wonderwoman: theme.semiTransparentOrange,
  flash: theme.semiTransparentRed,
  greenlantern: theme.semiTransparentGreen,
  aquaman: theme.semiTransparentYellow,
  greenarrow: theme.semiTransparentDarkGreen,
  cyborg: theme.semiTransparentDarkRed,
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
  leftFadeIn: keyframes`
    0% {
      opacity: 0;
      transform: translateX(-120px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  rightFadeIn: keyframes`
    0% {
      opacity: 0;
      transform: translateX(120px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
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
