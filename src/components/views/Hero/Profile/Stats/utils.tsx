import {
  ProfileStatsDimensions,
  ProfileStatsGridLineCoordinates,
  ProfileStatsPercentFontSize,
  ProfileStatsPercentOffsets,
} from '@/helpers/types';

export const chartDimensions: ProfileStatsDimensions = {
  height: 480,
  width: 1140,
};

export const chartHeightFactor = 100;
export const chartOffset = 24;

export const gridDimensions: ProfileStatsDimensions = {
  height: 456,
  width: 1140,
};
export const gridLineMargin = 114;
export const gridLinesCoordinates: ProfileStatsGridLineCoordinates[] = [
  {
    id: 'vertical-first-line',
    initPosX: 0,
    endPosX: 0,
    initPosY: gridDimensions.height,
    endPosY: 0,
  },
  {
    id: 'vertical-last-line',
    initPosX: gridDimensions.width,
    endPosX: gridDimensions.width,
    initPosY: gridDimensions.height,
    endPosY: 0,
  },
  {
    id: 'horizontal-first-line',
    initPosX: 0,
    endPosX: gridDimensions.width,
    initPosY: gridDimensions.height,
    endPosY: gridDimensions.height,
  },
  {
    id: 'horizontal-second-line',
    initPosX: 0,
    endPosX: gridDimensions.width,
    initPosY: gridDimensions.height - gridLineMargin,
    endPosY: gridDimensions.height - gridLineMargin,
  },
  {
    id: 'horizontal-third-line',
    initPosX: 0,
    endPosX: gridDimensions.width,
    initPosY: gridDimensions.height - gridLineMargin * 2,
    endPosY: gridDimensions.height - gridLineMargin * 2,
  },
  {
    id: 'horizontal-fourth-line',
    initPosX: 0,
    endPosX: gridDimensions.width,
    initPosY: gridDimensions.height - gridLineMargin * 3,
    endPosY: gridDimensions.height - gridLineMargin * 3,
  },
  {
    id: 'horizontal-last-line',
    initPosX: 0,
    endPosX: gridDimensions.width,
    initPosY: 0,
    endPosY: 0,
  },
];

export const barWidth = 200;
export const barMargin = 28;
export const barWidthWithMargin = barWidth + barMargin;
export const getBarHeight = (value: number): number =>
  (value * gridDimensions.height) / chartHeightFactor;

export const percentFontSize: ProfileStatsPercentFontSize = {
  value: '2.6rem',
  percent: '1.7rem',
};

export const percentOffsets: ProfileStatsPercentOffsets = {
  valueOffsetX: 65,
  percentOffsetX: 46,
  percentOffsetY: 4,
};
