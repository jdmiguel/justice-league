import { useRef } from 'react';
import { ProfileSkills } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Title from '@/components/ui/Title';
import Chart from '@/components/views/Hero/Profile/Stats/Chart';
import ChartGrid from '@/components/views/Hero/Profile/Stats/ChartGrid';
import ChartBars from '@/components/views/Hero/Profile/Stats/ChartBars';
import ChartLegends from '@/components/views/Hero/Profile/Stats/ChartLegends';
import ChartPercents from '@/components/views/Hero/Profile/Stats/ChartPercents';
import {
  chartDimensions,
  chartOffset,
  gridDimensions,
  barWidth,
  barWidthWithMargin,
  getBarHeight,
  percentFontSize,
  percentOffsets,
} from '@/components/views/Hero/Profile/Stats/utils';
import { StyledStats } from '@/components/views/Hero/Profile/styles';

type Props = {
  skills: ProfileSkills;
  color: string;
};

const Stats: React.FC<Props> = ({ skills, color }) => {
  const statsRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(statsRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-12%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const barsData = skills.map((skill, index) => {
    const barHeight = getBarHeight(skill.value);

    return {
      id: skill.name,
      posX: index * barWidthWithMargin + chartOffset / 2,
      posY: chartDimensions.height - barHeight,
      width: barWidth,
      height: barHeight,
      color,
    };
  });

  const legendsData = skills.map((skill, index) => ({
    name: skill.name,
    posX: index * barWidthWithMargin + skill.namePosX + chartOffset / 2,
    posY: chartDimensions.height,
  }));

  const percentsData = skills.map((skill, index) => {
    const barHeight = getBarHeight(skill.value);
    const posX = index * barWidthWithMargin + percentOffsets.valueOffsetX + chartOffset / 2;
    const posY = gridDimensions.height - (barHeight - chartOffset) / 2;

    return {
      id: skill.name,
      value: skill.value,
      posX,
      posY,
      valueTextFontSize: percentFontSize.value,
      percentTextFontSize: percentFontSize.percent,
      percentTextPosX: posX + percentOffsets.percentOffsetX,
      percentTextPosY: posY - percentOffsets.percentOffsetY,
    };
  });

  return (
    <StyledStats data-testid="profile-stats" ref={statsRef} isVisible={isVisible}>
      <Title text="Ranked stats" color={color} />
      <Chart>
        <ChartGrid />
        <ChartBars isVisible={isVisible} data={barsData} />
        <ChartPercents isVisible={isVisible} data={percentsData} />
        <ChartLegends data={legendsData} />
      </Chart>
    </StyledStats>
  );
};

export default Stats;
