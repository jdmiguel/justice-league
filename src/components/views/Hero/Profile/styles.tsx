import styled from 'styled-components';
import { animation, ease } from '@/helpers/animations';

export const StyledProfileWrapper = styled.main<{ bgLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  &:before {
    animation: ${animation.smoothFadeIn} 0.5s;
    background-image: ${({ bgLogoPath }) => `url(${bgLogoPath})`};
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    content: '';
    display: block;
    height: 100%;
    opacity: ${({ isLeaving }) => (isLeaving ? 0 : 0.1)};
    position: absolute;
    transition: opacity 0.5s ${ease.smooth};
    width: 100%;
    z-index: 1;
    @media only screen and (min-width: 768px) {
      background-size: cover;
    }
  }
`;

export const StyledProfile = styled.div`
  font-size: 1.44rem;
  height: 100%;
  line-height: 30px;
  margin: 0 auto;
  max-width: 100%;
  padding: 30px;
  @media only screen and (min-width: 768px) {
    padding: 100px 30px 80px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  gap: 100px;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
  @media only screen and (min-width: 992px) {
    margin-bottom: 100px;
  }
`;

export const StyledIntroImage = styled.img<{ semiTransparentColor: string }>`
  animation: ${animation.fadeInFromLeft} 0.5s forwards;
  border-radius: 50%;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  display: none;
  height: 380px;
  max-width: 100%;
  opacity: 0;
  width: 380px;
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;

export const StyledIntroTextWrapper = styled.div`
  animation: ${animation.fadeInFromRight} 0.5s forwards;
  display: flex;
  flex-direction: column;
  opacity: 0;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    text-align: left;
  }
`;

export const StyledIntroTitle = styled.h2`
  font-size: 60px;
  font-weight: 900;
  line-height: 1;
  @media only screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

export const StyledIntroSubtitle = styled.h3`
  font-size: 28px;
  line-height: 1;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const StyledIntroDescription = styled.p`
  white-space: break-spaces;
  @media only screen and (max-width: 767px) {
    font-size: 1.2rem;
    line-height: 22px;
  }
`;

export const StyledDetail = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 1200px) {
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

export const StyledDetailText = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-120px)')};
  transition: all 0.5s ${ease.smooth};
`;

export const StyledDetailImage = styled.img<{ semiTransparentColor: string; isVisible: boolean }>`
  border-radius: 8px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  display: none;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(120px)')};
  transition: all 0.5s ${ease.smooth};
  @media only screen and (min-width: 992px) {
    display: block;
    width: 520px;
  }
  @media only screen and (min-width: 1200px) {
    width: 580px;
  }
`;

export const StyledAppearance = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 40px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 992px) {
    gap: 0;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

export const StyledAppearanceText = styled.div<{ isVisible: boolean; xOrigin: 'left' | 'right' }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, xOrigin }) =>
    isVisible ? 'translateX(0)' : xOrigin === 'left' ? 'translateX(-120px)' : 'translateX(120px)'};
  transition: all 0.5s ${ease.smooth};
`;

export const StyledAppearanceImage = styled.img<{ isVisible: boolean }>`
  display: none;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: all 0.5s ${ease.smooth};
  width: 360px;
  @media only screen and (min-width: 992px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    width: auto;
  }
`;

export const StyledList = styled.ul`
  font-size: 1.1rem;
  line-height: 23px;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 32px;
  }
`;

export const StyledStats = styled.div<{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ${ease.smooth};
  width: 100%;
`;

export const StyledBars = styled.g`
  transform: translateY(-24px);
`;

export const StyledBar = styled.rect<{ isVisible: boolean }>`
  transform: ${({ isVisible }) => (isVisible ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: 100% 100%;
  transition: transform 0.75s ${ease.medium} 0.25s;
`;

export const StyledPercents = styled.g<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.4s ${ease.smooth} 0.5s;
`;
