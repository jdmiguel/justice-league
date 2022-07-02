import { ProfileStatsBarsData } from '@/helpers/types';
import ChartBar from '@/components/views/Hero/Profile/Stats/ChartBar';
import { StyledBars } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileStatsBarsData;
  isVisible: boolean;
};

const ChartBars: React.FC<Props> = ({ data, isVisible }) => (
  <StyledBars>
    {data.map((bar) => (
      <ChartBar
        key={bar.id}
        x={bar.posX}
        y={bar.posY}
        width={bar.width}
        height={bar.height}
        color={bar.color}
        isVisible={isVisible}
      />
    ))}
  </StyledBars>
);

export default ChartBars;
