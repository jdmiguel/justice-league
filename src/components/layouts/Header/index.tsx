import { ReactNode } from 'react';
import HeaderLogo from '@/components/layouts/Header/Logo';
import HeaderCorner from '@/components/layouts/Header/Corner';
import HeaderNavigation from '@/components/layouts/Header/Navigation';
import { StyledHeader } from '@/components/layouts/styles';

type Props = {
  children: ReactNode;
  isSticky?: boolean;
};

const Header = ({ children, isSticky }: Props) => (
  <StyledHeader isSticky={isSticky}>{children}</StyledHeader>
);

Header.Logo = HeaderLogo;
Header.Corner = HeaderCorner;
Header.Navigation = HeaderNavigation;

export default Header;
