import { ReactNode } from 'react';
import styled from 'styled-components';
import justiceLeagueLogoPath from '@/assets/logo/justice-league.svg';
import { ease } from '@/helpers/theme';
import Corner from '@/components/views/Layout/Corner';

const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  height: 100vh;
  position: relative;
  width: 100%;
`;

const StyledHeader = styled.header<{ withNavigation: boolean }>`
  border-bottom: ${({ theme, withNavigation }) => withNavigation && `1px solid ${theme.neutral}`};
  display: flex;
  justify-content: space-between;
  min-height: 85px;
  padding-right: ${({ withNavigation }) => withNavigation && '40px'};
  position: ${({ withNavigation }) => !withNavigation && 'absolute'};
  width: ${({ withNavigation }) => !withNavigation && '100%'};
  z-index: ${({ withNavigation }) => !withNavigation && '5'};
`;

const StyledHeaderLogo = styled.h1`
  align-items: center;
  display: flex;
`;

const StyledCornerWrapper = styled.div<{ isLeaving: boolean }>`
  opacity: ${({ isLeaving }) => (isLeaving ? 0 : 1)};
  transition: opacity 0.75s;
`;

const StyledHeaderMenu = styled.nav`
  align-items: center;

  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
`;

const StyledHeaderMenuList = styled.ul`
  align-items: center;
  display: flex;
  gap: 26px;
  justify-content: space-between;
`;

const StyledHeaderMenuListItem = styled.li<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.light : theme.neutral)};
  pointer-events: ${({ isActive }) => isActive && 'none'};
  transition: color 0.5s ${ease.medium};
  &:hover {
    color: ${({ theme }) => theme.light};
  }
`;

const StyledFooter = styled.footer<{ isLeaving: boolean }>`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  opacity: ${({ isLeaving }) => (isLeaving ? 0 : 1)};
  padding: 24px 44px;
  position: absolute;
  transition: opacity 1s ${ease.smooth} 0.2s;
  width: 100%;
  z-index: 5;
`;

const StyledFooterLink = styled.a`
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

type Props = {
  children: ReactNode;
  withNavigation?: boolean;
  isLeaving?: boolean;
};

const Layout: React.FC<Props> = ({ children, withNavigation = false, isLeaving = false }) => (
  <StyledLayout>
    <StyledHeader withNavigation={withNavigation}>
      <StyledHeaderLogo>
        <img src={justiceLeagueLogoPath} alt="justice league logo" height={40} width={200} />
      </StyledHeaderLogo>
      {withNavigation ? (
        <StyledHeaderMenu>
          <StyledHeaderMenuList>
            <StyledHeaderMenuListItem>
              <button>HOME</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem isActive>
              <button>PROFILE</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem>
              <button>MOVIES & SERIES</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem>
              <button>COMICS</button>
            </StyledHeaderMenuListItem>
          </StyledHeaderMenuList>
        </StyledHeaderMenu>
      ) : (
        <StyledCornerWrapper isLeaving={isLeaving}>
          <Corner />
        </StyledCornerWrapper>
      )}
    </StyledHeader>
    {children}
    {!withNavigation && (
      <StyledFooter isLeaving={isLeaving}>
        <div>
          Created by{' '}
          <StyledFooterLink
            href="https://jdmiguel.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
          >
            jdmiguel
          </StyledFooterLink>
        </div>
        <div>
          <h4>Based on DC characters</h4>
        </div>
      </StyledFooter>
    )}
  </StyledLayout>
);

export default Layout;
