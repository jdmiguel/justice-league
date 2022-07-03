import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledProfileWrapper = styled.main<{ heroLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  &:before {
    background-image: ${({ heroLogoPath }) => `url(${heroLogoPath})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    content: '';
    display: block;
    height: 100%;
    opacity: ${({ isLeaving }) => (isLeaving ? 0 : 0.1)};
    position: absolute;
    transition: opacity 0.5s ${ease.smooth};
    width: 100%;
    z-index: 1;
  }
`;

export const StyledProfile = styled.div`
  font-size: 20px;
  height: 100%;
  line-height: 30px;
  margin: 0 auto;
  max-width: 100%;
  padding: 100px 30px;
  width: 900px;
  @media only screen and (min-width: 992px) {
    width: 960px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  gap: 100px;
  margin-bottom: 80px;
  @media only screen and (min-width: 992px) {
    margin-bottom: 100px;
  }
`;

export const StyledIntroImage = styled.img<{ semiTransparentColor: string }>`
  animation: ${animation.leftFadeIn} 0.5s forwards;
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
  animation: ${animation.rightFadeIn} 0.5s forwards;
  display: flex;
  flex-direction: column;
  opacity: 0;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    text-align: left;
  }
`;

export const StyledIntroTitle = styled.h2`
  font-size: 90px;
  font-weight: 900;
  line-height: 1;
`;
export const StyledIntroSubtitle = styled.h3`
  font-size: 45px;
  line-height: 1;
  margin-bottom: 30px;
`;

export const StyledDetails = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  @media only screen and (min-width: 992px) {
    justify-content: space-between;
    margin-bottom: 80px;
  }
`;

export const StyledDetailsImage = styled.img<{ semiTransparentColor: string; isVisible: boolean }>`
  border-radius: 8px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  display: none;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(120px)')};
  transition: all 0.5s ${ease.smooth};
  width: 400px;
  @media only screen and (min-width: 992px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    width: 540px;
  }
`;

export const StyledAppearance = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-bottom: 60px;
  @media only screen and (min-width: 992px) {
    gap: 0;
    justify-content: space-between;
    margin-bottom: 0;
  }
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

export const StyledCard = styled.div<{ color: string; isVisible: boolean }>`
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 16px;
  font-size: 18px;
  height: 230px;
  padding: 20px;
  opacity: 0;
  @media only screen and (min-width: 1200px) {
    font-size: inherit;
    padding: 24px;
  }
`;

export const StyledLeftCard = styled(StyledCard)<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-120px)')};
  transition: all 0.5s ${ease.smooth};
`;

export const StyledRightCard = styled(StyledLeftCard)<{ isVisible: boolean }>`
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(120px)')};
`;

export const StyledCardTitle = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 12px;
  }
`;

export const StyledCardList = styled.ul`
  line-height: 28px;
  @media only screen and (min-width: 1200px) {
    line-height: 32px;
  }
`;

export const StyledStats = styled.div<{ isVisible: boolean }>`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ${ease.smooth};
  width: 100%;
`;

export const StyledStatsTitle = styled(StyledCardTitle)`
  margin-bottom: 24px;
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
