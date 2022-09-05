import { css } from 'styled-components';
import { keyframes } from 'styled-components';
import { theme } from './theme';
import { CustomAnimation } from './types';

export const ease = {
  medium: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  smooth: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
};

export const animation = {
  optopusGreet: keyframes`
    0%,100% { transform: rotate(0); }
    20%,60% { transform: rotate(-25deg); }
    40%,80% { transform: rotate(10deg); }
  `,
  backgroundNoise: keyframes`
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
  entryFromBottom: keyframes`
    0% {
      transform: translateY(120px);
    }
    100% {
      transform: translateY(0);
    }
  `,
  entryFromTop: keyframes`
    0% {
      transform: translateY(-120px);
    }
    100% {
      transform: translateY(0);
    }
 `,
  loaderBar: keyframes`
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
  fadeInFromLeft: keyframes`
    0% {
      opacity: 0;
      transform: translateX(-120px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  `,
  fadeInFromRight: keyframes`
    0% {
      opacity: 0;
      transform: translateX(120px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
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
  smoothFadeIn: keyframes`
    0% {
      pacity: 0;
    }
    100% {
      opacity: 0.1;
    }
  `,
};
