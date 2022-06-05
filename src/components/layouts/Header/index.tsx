import { ReactNode } from 'react';
import Logo from '@/components/layouts/Header/Logo';
import Corner from '@/components/layouts/Header/Corner';
import Navigation from '@/components/layouts/Header/Navigation';
import Divider from '@/components/layouts/Header/Divider';
import { StyledHeader } from '@/components/layouts/styles';

type Props = {
  children: ReactNode;
  isSticky?: boolean;
};

const Header = ({ children, isSticky }: Props) => (
  <StyledHeader isSticky={isSticky}>{children}</StyledHeader>
);

Header.Logo = Logo;
Header.Corner = Corner;
Header.Navigation = Navigation;
Header.Divider = Divider;

export default Header;
