import { Fragment } from 'react';
import { theme } from '@/helpers/theme';
import { ProfileStatsPercentsData } from '@/helpers/types';
import { StyledPercents } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileStatsPercentsData;
  isVisible: boolean;
};

const ChartPercents: React.FC<Props> = ({ data, isVisible }) => (
  <StyledPercents isVisible={isVisible}>
    {data.map((percent) => (
      <Fragment key={percent.id}>
        <text
          x={percent.posX}
          y={percent.posY}
          fontSize={percent.valueTextFontSize}
          fill={theme.light}
        >
          {percent.value}
        </text>
        <text
          x={percent.percentTextPosX}
          y={percent.percentTextPosY}
          fontSize={percent.percentTextFontSize}
          fill={theme.light}
        >
          %
        </text>
      </Fragment>
    ))}
  </StyledPercents>
);

export default ChartPercents;
