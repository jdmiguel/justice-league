import { ReactNode } from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { StyledLayout } from '@/components/layouts/styles';

type Props = {
  children: ReactNode;
  withNavigation?: boolean;
  isLeaving: boolean;
  onClickNavigation?: (path: string) => void;
};

const Layout: React.FC<Props> = ({
  children,
  withNavigation = false,
  isLeaving,
  onClickNavigation,
}) => (
  <StyledLayout>
    <Header
      withNavigation={withNavigation}
      isLeaving={isLeaving}
      onClick={(path: string) => onClickNavigation?.(path)}
    />
    {children}
    {!withNavigation && <Footer isLeaving={isLeaving} />}
  </StyledLayout>
);

export default Layout;
