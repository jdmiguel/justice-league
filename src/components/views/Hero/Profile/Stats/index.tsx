import { useMemo, useRef } from 'react';
import { ProfileStatsData } from '@/helpers/types';
import { ease } from '@/helpers/theme';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Chart from '@/components/views/Hero/Profile/Stats/Chart';
import ChartGrid from '@/components/views/Hero/Profile/Stats/ChartGrid';
import ChartBars from '@/components/views/Hero/Profile/Stats/ChartBars';
import ChartLegends from '@/components/views/Hero/Profile/Stats/ChartLegends';
import ChartPercents from '@/components/views/Hero/Profile/Stats/ChartPercents';
import {
  ChartDetails,
  GridDetails,
  BarDetails,
  PercentDetails,
} from '@/components/views/Hero/Profile/Stats/utils';
import { StyledStats, StyledStatsTitle } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileStatsData;
};

const Stats: React.FC<Props> = ({ data }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(statsRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-12%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const { color, skills } = data;
  const totalBars = skills.length;

  const chartWidth = useMemo(() => totalBars * (BarDetails.width + BarDetails.margin), [totalBars]);
  const barsData = useMemo(
    () =>
      skills.map((skill, index) => {
        const barHeight = (skill.value * GridDetails.height) / ChartDetails.heightFactor;

        return {
          id: skill.name,
          posX: index * (BarDetails.width + BarDetails.margin),
          posY: ChartDetails.height - barHeight,
          width: BarDetails.width as number,
          height: barHeight,
          color,
        };
      }),
    [color, skills],
  );
  const legendsData = useMemo(
    () =>
      skills.map((skill, index) => ({
        name: skill.name,
        posX: (BarDetails.width + BarDetails.margin) * index + skill.namePosX,
        posY: ChartDetails.height,
      })),
    [skills],
  );
  const percentsData = useMemo(
    () =>
      skills.map((skill, index) => {
        const barHeight =
          (skill.value * ChartDetails.height) / ChartDetails.heightFactor - ChartDetails.padding;
        const posX = (BarDetails.width + BarDetails.margin) * index + PercentDetails.offsetX;
        const posY = GridDetails.height - barHeight / 2 + PercentDetails.offsetY;

        return {
          id: skill.name,
          value: skill.value,
          posX,
          posY,
          valueTextFontSize: PercentDetails.valueTextFontSize as string,
          percentTextFontSize: PercentDetails.percentTextFontSize as string,
          percentTextPosX: (posX + PercentDetails.percentTextOffsetX) as number,
          percentTextPosY: (posY - PercentDetails.percentTextOffsetY) as number,
        };
      }),
    [skills],
  );

  return (
    <StyledStats ref={statsRef} isVisible={isVisible}>
      <StyledStatsTitle color={color}>Ranked stats</StyledStatsTitle>
      <Chart width={chartWidth} height={ChartDetails.height}>
        <ChartGrid
          width={chartWidth - ChartDetails.padding}
          height={GridDetails.height}
          lineVerticalMargin={GridDetails.lineMargin}
        />
        <ChartBars isVisible={isVisible} data={barsData} />
        <ChartPercents isVisible={isVisible} data={percentsData} />
        <ChartLegends data={legendsData} />
      </Chart>
    </StyledStats>
  );
};

export default Stats;
