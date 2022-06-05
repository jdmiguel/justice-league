import styled from 'styled-components';
import { animation } from '@/helpers/theme';

export const StyledProfile = styled.main<{ heroLogoPath: string }>`
  overflow: hidden;
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    animation: ${animation.minFadeIn} 1s;
    background-image: ${({ heroLogoPath }) => `url(${heroLogoPath})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 100%;
    opacity: 0.1;
    position: absolute;
    z-index: 1;
    width: 100%;
  }
`;
