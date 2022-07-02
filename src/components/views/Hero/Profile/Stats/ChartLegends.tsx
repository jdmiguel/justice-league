import { theme } from '@/helpers/theme';
import { ProfileStatsLegendsData } from '@/helpers/types';

type Props = {
  data: ProfileStatsLegendsData;
};

const ChartLegends: React.FC<Props> = ({ data }) => (
  <g>
    {data.map((legend) => (
      <text key={legend.name} x={legend.posX} y={legend.posY} fill={theme.light}>
        {legend.name}
      </text>
    ))}
  </g>
);

export default ChartLegends;
