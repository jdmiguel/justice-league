import styled from 'styled-components';
import { animation, ease } from '@/helpers/animations';

export const StyledHeroMenu = styled.main<{ isFaded: boolean }>`
  animation: ${animation.fadeIn} 1s;
  opacity: ${({ isFaded }) => isFaded && 0};
  transition: opacity 1s ${ease.smooth} 0.2s;
  touch-action: none;
`;

export const StyledGrainedBg = styled.div`
  animation: ${animation.backgroundNoise} 5s infinite;
  animation-timing-function: steps(10);
  backface-visibility: hidden;
  background-image: url('/noise-texture.png');
  background-color: ${({ theme }) => theme.alphaDark_65};
  height: 300%;
  left: -100%;
  position: absolute;
  top: -100%;
  transform: translateZ(0);
  width: 300%;
  will-change: transform;
  z-index: 2;
`;

export const StyledHeroVectorLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  padding: 20px;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

export const StyledHeroVectorLogoSvg = styled.svg<{ isHighlighted: boolean; isFaded: boolean }>`
  max-height: 100%;
  opacity: ${({ isFaded }) => isFaded && 0};
  overflow: visible;
  transition: all 0.9s ${ease.smooth};
  transform: ${({ isHighlighted, isFaded }) =>
    isHighlighted ? (isFaded ? 'scale(1.5)' : 'scale(1.15)') : 'scale(1)'};
  width: 150px;
  will-change: transform, opacity;
  @media only screen and (min-width: 768px) {
    width: 320px;
  }
  @media only screen and (min-width: 1200px) {
    width: 380px;
  }
  @media only screen and (min-width: 1650px) {
    width: initial;
  }
`;

export const StyledHeroVectorLogoPath = styled.path<{ isHighlighted: boolean; heroColor: string }>`
  fill: ${({ theme, isHighlighted, heroColor }) =>
    isHighlighted ? heroColor : theme.alphaDark_75};
  transition: fill 0.9s ${ease.smooth};
`;

export const StyledHeroBg = styled.div<{ bgPath: string; isActive: boolean; isDarkened: boolean }>`
  animation: ${animation.scaleIn} 0.8s ${ease.smooth};
  opacity: 0.35;
  background-image: ${({ bgPath }) => `url(${bgPath})`};
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  opacity: ${({ isActive, isDarkened }) => (isActive ? (isDarkened ? 0.3 : 1) : 0)};
  position: absolute;
  transform: ${({ isActive, isDarkened }) =>
    isActive ? (isDarkened ? 'scale(1.05)' : 'scale(1)') : 'scale(1.3)'};
  transform-origin: 50%;
  transition: all 0.9s ${ease.smooth};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  width: 100%;
  will-change: transform, opacity;
  z-index: 1;
  @media only screen and (min-width: 768px) {
    background-size: cover;
  }
`;

export const StyledHeroHeading = styled.nav`
  font-size: 4rem;
  font-weight: 700;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
  @media only screen and (min-width: 768px) {
    font-size: 5.5rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 5.8rem;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 6.8rem;
  }
  @media only screen and (min-width: 1650px) {
    font-size: 8.5rem;
  }
`;

export const StyledHeroHeadingList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const StyledHeroHeadingListItem = styled.li`
  position: absolute;
`;

export const StyledHeroHeadingListItemButton = styled.button<{ isDisabled: boolean }>`
  height: 100%;
  pointer-events: ${({ isDisabled }) => isDisabled && 'none'};
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const StyledHeroHeadingListItemText = styled.h2`
  user-select: none;
`;

export const StyledSidedrawer = styled.nav`
  bottom: 10px;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 5;
  @media only screen and (min-width: 768px) {
    bottom: 30px;
  }
  @media only screen and (min-width: 1200px) {
    bottom: initial;
    flex-direction: column;
    height: 100%;
    padding-left: 24px;
    width: 220px;
  }
`;

export const StyledSidedrawerList = styled.ul`
  display: flex;
  gap: 12px;
  @media only screen and (min-width: 1200px) {
    flex-direction: column;
    gap: 18px;
    width: 220px;
  }
`;

export const StyledSidedrawerListItem = styled.li<{ isActive: boolean }>`
  button {
    align-items: center;
    display: flex;
    pointer-events: ${({ isActive }) => isActive && 'none'};
    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 34px;
      width: 60px;
    }
    &:hover {
      img {
        opacity: 1;
      }

      span {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  img {
    height: 28px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    transition: opacity 0.4s ${ease.medium};
    width: 32px;
  }
  span {
    display: none;
    margin-left: 8px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateX(0px)' : 'translateX(15px)')};
    transition: all 0.4s ${ease.medium};
    @media only screen and (min-width: 1200px) {
      display: inline-block;
    }
  }
  &:nth-of-type(2) {
    img {
      height: 34px;
      width: 36px;
    }
  }
  &:nth-of-type(4) {
    img {
      height: 34px;
      width: 32px;
    }
  }
`;
