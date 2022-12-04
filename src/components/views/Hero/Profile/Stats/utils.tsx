export enum ChartDetails {
  height = 480,
  heightFactor = 100,
  padding = 24,
  totalBars = 5,
}

export enum GridDetails {
  height = 456,
  lineMargin = 114,
  width = 1140,
}

export const gridLinesCoordinates = [
  {
    id: 'vertical-first-line',
    initPosX: 0,
    endPosX: 0,
    initPosY: GridDetails.height,
    endPosY: 0,
  },
  {
    id: 'vertical-last-line',
    initPosX: GridDetails.width,
    endPosX: GridDetails.width,
    initPosY: GridDetails.height,
    endPosY: 0,
  },
  {
    id: 'horizontal-first-line',
    initPosX: 0,
    endPosX: GridDetails.width,
    initPosY: GridDetails.height,
    endPosY: GridDetails.height,
  },
  {
    id: 'horizontal-second-line',
    initPosX: 0,
    endPosX: GridDetails.width,
    initPosY: GridDetails.height - GridDetails.lineMargin,
    endPosY: GridDetails.height - GridDetails.lineMargin,
  },
  {
    id: 'horizontal-third-line',
    initPosX: 0,
    endPosX: GridDetails.width,
    initPosY: GridDetails.height - GridDetails.lineMargin * 2,
    endPosY: GridDetails.height - GridDetails.lineMargin * 2,
  },
  {
    id: 'horizontal-fourth-line',
    initPosX: 0,
    endPosX: GridDetails.width,
    initPosY: GridDetails.height - GridDetails.lineMargin * 3,
    endPosY: GridDetails.height - GridDetails.lineMargin * 3,
  },
  {
    id: 'horizontal-last-line',
    initPosX: 0,
    endPosX: GridDetails.width,
    initPosY: 0,
    endPosY: 0,
  },
];

export enum BarDetails {
  width = 200,
  margin = 28,
}

export enum PercentDetails {
  offsetX = 65,
  offsetY = 7,
  valueTextFontSize = '2.8rem',
  percentTextFontSize = '1.8rem',
  percentTextOffsetX = 48,
  percentTextOffsetY = 4,
}
