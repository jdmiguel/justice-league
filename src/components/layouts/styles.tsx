import styled from 'styled-components';
import { animation, ease } from '@/helpers/animations';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  min-height: 100vh;
  @media only screen and (max-width: 767px) {
    overflow-x: hidden;
  }
`;

export const StyledHeader = styled.header<{ isSticky?: boolean }>`
  background-color: ${({ theme, isSticky }) => isSticky && theme.dark};
  display: flex;
  justify-content: space-between;
  min-height: 50px;
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'absolute')};
  top: 0;
  width: 100%;
  z-index: 6;
  @media only screen and (min-width: 768px) {
    min-height: 85px;
  }
`;

export const StyledHeaderLogo = styled.h1<{ isLeaving?: boolean }>`
  animation: ${animation.entryFromTop} 0.5s ${ease.medium};
  align-items: center;
  display: flex;
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
  img {
    @media only screen and (max-width: 767px) {
      width: 124px;
    }
  }
`;

export const StyledHeaderNavigation = styled.nav<{ isLeaving?: boolean }>`
  align-items: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 30px;
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    margin-right: 40px;
  }
`;

export const StyledHeaderNavigationList = styled.ul`
  animation: ${animation.entryFromTop} 0.5s ${ease.medium};
  align-items: center;
  display: flex;
  gap: 26px;
  justify-content: space-between;
`;

export const StyledHeaderNavigationListItem = styled.li<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.light : theme.neutral)};
  pointer-events: ${({ isActive }) => isActive && 'none'};
  transition: color 0.5s ${ease.medium};
  &:hover {
    color: ${({ theme }) => theme.light};
  }
`;

export const StyledHeaderCorner = styled.a<{ isLeaving?: boolean }>`
  animation: ${animation.entryFromTop} 0.5s ${ease.medium};
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
  svg {
    border: 0;
    color: transparent;
    fill: ${({ theme }) => theme.neutral};
    @media only screen and (max-width: 767px) {
      height: 50px;
      width: 50px;
    }
  }
  path {
    &:not(:first-of-type) {
      fill: ${({ theme }) => theme.dark};
      transform-origin: 130px 106px;
    }
  }
  &:hover {
    svg {
      fill: ${({ theme }) => theme.neutralLight};
    }
    path {
      &:nth-of-type(2) {
        animation: ${animation.optopusGreet} 560ms ease-in-out;
      }
    }
  }
`;

export const StyledHeaderDivider = styled.span<{ isLeaving?: boolean }>`
  animation: ${animation.fadeIn} 0.5s ${ease.medium};
  background-color: ${({ theme }) => theme.neutral};
  bottom: 0;
  display: block;
  height: 1px;
  opacity: 0.1;
  position: absolute;
  opacity: ${({ isLeaving }) => (isLeaving ? 0 : 1)};
  transition: opacity 0.5s ${ease.smooth};
  z-index: 1;
  width: 100%;
`;

export const StyledFooter = styled.footer<{ isLeaving?: boolean }>`
  display: none;
  @media only screen and (min-width: 1200px) {
    align-items: flex-end;
    animation: ${animation.entryFromBottom} 0.5s ${ease.medium};
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 24px 44px;
    position: absolute;
    transform: ${({ isLeaving }) => isLeaving && 'translateY(120px)'};
    transition: transform 0.5s ${ease.medium};
    width: 100%;
    z-index: 5;
  }
`;

export const StyledFooterLink = styled.a`
  position: relative;
  margin-left: 4px;
  &:after {
    background-color: ${({ theme }) => theme.light};
    bottom: 0;
    content: '';
    position: absolute;
    height: 1px;
    left: 0;
    transition: transform 0.2s ease-out;
    width: 100%;
  }
  &:hover {
    &:after {
      transform: scaleX(0);
    }
  }
`;
