import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledEnemiesWrapper = styled.main<{ heroLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    animation: ${animation.minFadeIn} 0.5s;
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

export const StyledEnemies = styled.div`
  display: grid;
  column-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding: 100px 30px 80px;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  padding: 80px 30px;
  row-gap: 40px;
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    max-width: 1200px;
    row-gap: 60px;
  }
`;

export const StyledCard = styled.div<{ color: string; isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: 0;
  max-width: 100%;
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
  text-align: center;
  @media only screen and (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 12px;
  }
`;

export const StyledCardContent = styled.div`
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 16px;
  font-size: 18px;
  padding: 20px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export const StyledCardImage = styled.img<{ semiTransparentColor: string }>`
  border-radius: 4px;
  box-shadow: ${({ semiTransparentColor }) => `0px 0px 12px 2px ${semiTransparentColor}`};
`;

export const StyledCardDescription = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
