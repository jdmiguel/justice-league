import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledLogo = styled.h1`
  align-items: center;
  display: flex;
`;

export const StyledCorner = styled.a`
  svg {
    border: 0;
    color: transparent;
    transition: fill ease-out 250ms;
    fill: ${({ theme }) => theme.neutral};
  }
  path {
    &:not(:first-of-type) {
      fill: ${({ theme }) => theme.dark};
      transform-origin: 130px 106px;
    }
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.neutralLight};
    }
    path {
      &:nth-of-type(2) {
        animation: ${animation.greet} 560ms ease-in-out;
      }
    }
  }
`;

export const StyledLoaderWrapper = styled.div<{ withLightBg: boolean }>`
  align-items: center;
  background-color: ${({ theme, withLightBg }) => (withLightBg ? theme.light : theme.dark)};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  gap: 2px;
  height: 100px;
  justify-content: center;
  width: 100px;

  span {
    animation: ${animation.equalizer} 1s linear infinite;
    background: ${({ theme }) => theme.light};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: inline-block;
    height: 30px;
    transform-origin: bottom center;
    width: 5px;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }

    &:nth-of-type(4) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(5) {
      animation-delay: 0.5s;
    }
  }
`;

export const StyledNavigationDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;

  h4 {
    font-weight: 700;
  }

  ul,
  figure {
    position: relative;
  }

  li {
    display: flex;
    gap: 4px;
    opacity: 0;
    position: absolute;
    right: 16px;
    white-space: nowrap;

    &:first-of-type {
      img {
        &:first-of-type {
          top: -1px;
        }
        &:last-of-type {
          left: 3px;
          top: 5px;
        }
      }
    }

    &:last-of-type {
      img {
        &:first-of-type {
          left: 4px;
        }
        &:last-of-type {
          left: 3px;
          top: 5px;
        }
      }
    }
  }

  img {
    position: absolute;
  }
`;
