import { ReactNode } from 'react';
import rotateDevicePath from '@/assets/rotate-device.png';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import { StyledLayout, StyledRotateDevice } from '@/components/layouts/styles';

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
    <StyledRotateDevice>
      <img src={rotateDevicePath} alt="no portrait allowed" />
      <p>Change your device from portrait to landscape orientation to enjoy a better experience</p>
    </StyledRotateDevice>
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
