import { StyledBar } from '@/components/views/Hero/Profile/styles';

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  isVisible: boolean;
};

const ChartBar: React.FC<Props> = ({ x, y, width, height, color, isVisible }) => (
  <StyledBar x={x} y={y} width={width} height={height} fill={color} isVisible={isVisible} />
);

export default ChartBar;
