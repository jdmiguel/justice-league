import { theme } from '@/helpers/theme';

type Props = {
  width: number;
  height: number;
  lineVerticalMargin: number;
};

const ChartGrid: React.FC<Props> = ({ width, height, lineVerticalMargin }) => {
  const verticalPositions = {
    first: height,
    second: height - lineVerticalMargin,
    third: height - lineVerticalMargin * 2,
    fourth: height - lineVerticalMargin * 3,
    fifth: 0,
  };

  return (
    <>
      <g>
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.first}
          x2={width}
          y2={verticalPositions.first}
        />
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.second}
          x2={width}
          y2={verticalPositions.second}
        />
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.third}
          x2={width}
          y2={verticalPositions.third}
        />
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.fourth}
          x2={width}
          y2={verticalPositions.fourth}
        />
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.fifth}
          x2={width}
          y2={verticalPositions.fifth}
        />
      </g>
      <g>
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={0}
          y1={verticalPositions.first}
          x2={0}
          y2={verticalPositions.fifth}
        />
        <line
          strokeDasharray="2 2"
          stroke={theme.neutral}
          x1={width}
          y1={verticalPositions.first}
          x2={width}
          y2={verticalPositions.fifth}
        />
      </g>
    </>
  );
};

export default ChartGrid;
