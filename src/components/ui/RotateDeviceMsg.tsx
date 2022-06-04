import rotateDevicePath from '@/assets/rotate-device.png';
import { StyledRotateDevice } from '@/components/ui/styles';

const RotateDeviceMsg: React.FC = () => (
  <StyledRotateDevice>
    <img src={rotateDevicePath} alt="no portrait allowed" />
    <p>Change your device from portrait to landscape orientation to enjoy a better experience</p>
  </StyledRotateDevice>
);

export default RotateDeviceMsg;
