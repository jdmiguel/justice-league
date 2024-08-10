import styled from 'styled-components';

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
  padding: 20px;
  width: ${({ width }) => (width ? `${width}px` : 'unset')};
  @media only screen and (min-width: 768px) {
    padding: 24px;
  }
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
  gap: 24px;
  @media only screen and (min-width: 768px) {
    gap: 26px;
  }
`;

export const StyledCardText = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  gap: 4px;
`;

export const StyledCardImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 4px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 12px 2px ${semiTransparentColor}`};
  @media only screen and (max-width: 767px) {
    height: 138px;
  }
`;

export const StyledCardImageThumb = styled(StyledCardImage)`
  height: 90px;
`;

export const StyledCardDescription = styled.p<{
  withCenteredAlignment?: boolean;
  textSize: number;
}>`
  font-size: ${({ textSize }) => `${textSize}px`};
  line-height: 23px;
  text-align: ${({ withCenteredAlignment }) => (withCenteredAlignment ? 'center' : 'unset')};
  @media only screen and (max-width: 767px) {
    line-height: 21px;
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
