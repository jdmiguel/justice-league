import { StyledRotateDevice } from '@/components/ui/styles';

const RotateDeviceMsg: React.FC = () => (
  <StyledRotateDevice>
    <img src="/rotate-device.png" alt="no portrait allowed" />
    <p>Change your device from portrait to landscape orientation to enjoy a better experience</p>
  </StyledRotateDevice>
);

export default RotateDeviceMsg;
