import styled from 'styled-components';

export const StyledTimelineWrapper = styled.main<{ heroLogoPath: string }>`
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
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
