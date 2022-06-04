import { ReactNode } from 'react';
import { StyledLayout } from '@/components/layouts/styles';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => <StyledLayout>{children}</StyledLayout>;

export default Layout;
