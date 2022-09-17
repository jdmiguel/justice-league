import styled from 'styled-components';
import { animation, ease } from '@/helpers/animations';

export const StyledEnemiesWrapper = styled.main<{ heroLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    animation: ${animation.smoothFadeIn} 0.5s;
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
  padding: 40px 30px;
  row-gap: 40px;
  @media only screen and (min-width: 768px) {
    padding: 100px 30px 80px;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    max-width: 1200px;
    row-gap: 60px;
  }
`;

export const StyledEnemy = styled.div<{ isVisible: boolean; xOrigin: 'left' | 'right' }>`
  opacity: 0;
  max-width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible, xOrigin }) =>
    isVisible ? 'translateX(0)' : xOrigin === 'left' ? 'translateX(-120px)' : 'translateX(120px)'};
  transition: all 0.5s ${ease.smooth};
`;
