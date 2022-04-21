import { ReactNode } from 'react';
import styled from 'styled-components';
import justiceLeagueLogoPath from '@/assets/logo/justice-league.svg';
import Corner from '@/components/views/Layout/Corner';

export const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  height: 100vh;
  position: relative;
  width: 100%;
`;

export const StyledHeader = styled.header`
  align-items: center;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 4;
`;

export const StyledFooter = styled.footer`
  bottom: 0;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 44px;
  z-index: 4;
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

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <StyledLayout>
    <StyledHeader>
      <img src={justiceLeagueLogoPath} alt="justice league logo" height={40} width={200} />
      <Corner />
    </StyledHeader>
    {children}
    <StyledFooter>
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
  </StyledLayout>
);

export default Layout;
