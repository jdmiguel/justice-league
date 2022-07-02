import styled from 'styled-components';
import { ease } from '@/helpers/theme';

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
  width: 1200px;
`;

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  gap: 100px;
  margin-bottom: 100px;
`;

export const StyledIntroImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 50%;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  height: 380px;
  max-width: 100%;
  opacity: 0;
  width: 380px;
`;

export const StyledIntroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
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
  gap: 100px;
  margin-bottom: 80px;
`;

export const StyledDetailsImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 8px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 16px 4px ${semiTransparentColor}`};
  max-width: 100%;
  opacity: 0;
  width: 580px;
`;

export const StyledAppearance = styled.div`
  align-items: center;
  display: flex;
  gap: 50px;
`;

export const StyledAppearanceImage = styled.img`
  max-width: 100%;
  opacity: 0;
`;

export const StyledCard = styled.div<{ color: string }>`
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 16px;
  padding: 24px;
  opacity: 0;
`;

export const StyledCardTitle = styled.h4<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const StyledStats = styled.div<{ isVisible: boolean }>`
  height: 480px;
  margin-bottom: 40px;
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
