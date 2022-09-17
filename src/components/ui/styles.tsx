import styled from 'styled-components';
import { animation } from '@/helpers/animations';

export const StyledLoaderWrapper = styled.div<{ withLightBg: boolean }>`
  align-items: center;
  background-color: ${({ theme, withLightBg }) => (withLightBg ? theme.light : theme.dark)};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const StyledLoader = styled.div<{ withMarginBottom: boolean }>`
  align-items: center;
  display: flex;
  gap: 2px;
  justify-content: center;
  margin-bottom: ${({ withMarginBottom }) => withMarginBottom && '85px'};

  span {
    animation: ${animation.loaderBar} 1s linear infinite;
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

export const StyledCard = styled.div<{ color: string; width?: number }>`
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 16px;
  padding: 24px;
  width: ${({ width }) => (width ? `${width}px` : 'unset')};
`;

export const StyledCardVerticalWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const StyledCardVerticalContent = styled.div<{ gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-direction: column;
`;

export const StyledCardHorizontalContent = styled.div`
  align-items: center;
  display: flex;
  gap: 26px;
`;

export const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 4px;
`;

export const StyledCardImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 4px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 12px 2px ${semiTransparentColor}`};
`;

export const StyledCardImageThumb = styled(StyledCardImage)`
  height: 90px;
`;

export const StyledCardDescription = styled.p<{ withCenteredAlignment?: boolean }>`
  font-size: 17px;
  line-height: 20px;
  text-align: ${({ withCenteredAlignment }) => (withCenteredAlignment ? 'center' : 'unset')};
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 23px;
  }
`;

export const StyledTitle = styled.h4<{
  color: string;
  textSize: number;
  withCenteredAlignment: boolean;
}>`
  color: ${({ color }) => color};
  font-size: ${({ textSize }) => `${textSize}px`};
  font-weight: 700;
  text-align: ${({ withCenteredAlignment }) => (withCenteredAlignment ? 'center' : 'unset')};
`;
