import styled from 'styled-components';
import { animation, ease } from '@/helpers/animations';

export const StyledTimelineWrapper = styled.main<{ heroLogoPath: string; isLeaving?: boolean }>`
  position: relative;
  min-height: calc(100vh - 85px);
  &:before {
    animation: ${animation.smoothFadeIn} 0.5s;
    background-image: ${({ heroLogoPath }) => `url(${heroLogoPath})`};
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

export const StyledTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  padding: 30px;
  @media only screen and (min-width: 768px) {
    padding: 50px 30px;
  }
  @media only screen and (min-width: 1200px) {
    padding: 100px 30px 80px;
    max-width: 1200px;
  }
`;

export const StyledEvent = styled.div<{ isVisible: boolean }>`
  align-items: center;
  display: flex;
  gap: 50px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 0.5s ${ease.smooth};
  &:nth-of-type(odd) {
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-120px)')};
  }
  &:nth-of-type(even) {
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(120px)')};
    @media only screen and (min-width: 768px) {
      align-self: flex-end;
    }
    > :nth-child(even) {
      @media only screen and (min-width: 768px) {
        order: 1;
      }
    }
    > :nth-child(odd) {
      @media only screen and (min-width: 768px) {
        order: 2;
      }
    }
  }
  > :nth-child(odd) {
    @media only screen and (max-width: 767px) {
      order: 2;
    }
  }
`;

export const StyledYearBubble = styled.div<{
  color: string;
  cardXPosition: 'left' | 'right';
  isFirst: boolean;
  isVisible: boolean;
}>`
  align-items: center;
  border: ${({ color }) => `4px solid ${color}`};
  border-radius: 50%;
  display: flex;
  font-size: 1.3rem;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  &:before {
    background-color: ${({ color }) => color};
    content: '';
    height: 4px;
    left: 76px;
    position: absolute;
    width: 54px;
    @media only screen and (min-width: 768px) {
      left: ${({ cardXPosition }) => (cardXPosition === 'left' ? '-54px' : '76px')};
      width: 50px;
    }
  }
  &:after {
    background-color: ${({ color }) => color};
    content: '';
    display: ${({ isFirst }) => isFirst && 'none'};
    height: 90px;
    position: absolute;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: all 0.5s ${ease.medium} 0.4s;
    width: 4px;
    top: -90px;
    @media only screen and (min-width: 768px) {
      height: 58px;
      top: -61px;
      visibility: hidden;
    }
    @media only screen and (min-width: 1200px) {
      height: 104px;
      top: -104px;
      visibility: visible;
    }
  }
`;
