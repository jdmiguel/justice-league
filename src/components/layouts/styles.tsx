import styled from 'styled-components';
import { animation, ease } from '@/helpers/theme';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  height: 100vh;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const StyledRotateDevice = styled.div`
  display: none;
  @media only screen and (orientation: portrait) and (max-width: 768px) {
    align-items: center;
    background-color: ${({ theme }) => theme.dark};
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 100vh;
    justify-content: center;
    padding: 30px;
    position: absolute;
    z-index: 6;
    width: 100%;
    img {
      max-width: 100%;
    }
    p {
      text-align: center;
      padding: 30px;
    }
  }
`;

export const StyledHeader = styled.header<{
  withNavigation: boolean;
  isEntering: boolean;
  isLeaving: boolean;
}>`
  animation: ${animation.down} 0.5s ${ease.medium};
  border-bottom: ${({ theme, withNavigation }) => withNavigation && `1px solid ${theme.neutral}`};
  display: flex;
  justify-content: space-between;
  min-height: 85px;
  padding-right: ${({ withNavigation }) => withNavigation && '40px'};
  position: ${({ withNavigation }) => !withNavigation && 'absolute'};
  transform: ${({ isLeaving }) => isLeaving && 'translateY(-120px)'};
  transition: transform 0.5s ${ease.medium};
  width: ${({ withNavigation }) => !withNavigation && '100%'};
  z-index: ${({ withNavigation }) => !withNavigation && '5'};
`;

export const StyledHeaderMenu = styled.nav`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
`;

export const StyledHeaderMenuList = styled.ul`
  align-items: center;
  display: flex;
  gap: 26px;
  justify-content: space-between;
`;

export const StyledHeaderMenuListItem = styled.li<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.light : theme.neutral)};
  pointer-events: ${({ isActive }) => isActive && 'none'};
  transition: color 0.5s ${ease.medium};
  &:hover {
    color: ${({ theme }) => theme.light};
  }
`;

export const StyledFooter = styled.footer<{ isEntering: boolean; isLeaving: boolean }>`
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