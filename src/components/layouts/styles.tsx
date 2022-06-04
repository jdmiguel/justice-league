import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledLayout = styled.main`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const StyledHeader = styled.header<{ isSticky?: boolean }>`
  display: flex;
  justify-content: space-between;
  min-height: 85px;
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'absolute')};
  width: 100%;
  z-index: 6;
`;

export const StyledHeaderLogo = styled.h1`
  align-items: center;
  display: flex;
`;

export const StyledHeaderNavigation = styled.nav<{ isLeaving?: boolean }>`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 40px;
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
`;

export const StyledHeaderNavigationList = styled.ul`
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
  animation: ${animation.down} 0.5s ${ease.medium};
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
  svg {
    border: 0;
    color: transparent;
    fill: ${({ theme }) => theme.neutral};
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
        animation: ${animation.greet} 560ms ease-in-out;
      }
    }
  }
`;

export const StyledFooter = styled.footer<{ isLeaving?: boolean }>`
  display: none;
  @media only screen and (min-width: 1200px) {
    align-items: flex-end;
    animation: ${animation.up} 0.5s ${ease.medium};
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
