import styled from 'styled-components';
import { animation } from '@/helpers/theme';

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
    animation: ${animation.wave} 1s linear infinite;
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

export const StyledRotateDevice = styled.div`
  display: none;
  @media only screen and (orientation: portrait) and (max-width: 768px) {
    align-items: center;
    background-color: ${({ theme }) => theme.dark};
    color: ${({ theme }) => theme.light};
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    justify-content: center;
    padding: 30px;
    position: absolute;
    z-index: 8;
    width: 100%;
    img {
      max-width: 100%;
    }
    p {
      text-align: center;
      padding: 30px;
    }
  }
`;
