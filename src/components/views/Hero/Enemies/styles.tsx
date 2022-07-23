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
