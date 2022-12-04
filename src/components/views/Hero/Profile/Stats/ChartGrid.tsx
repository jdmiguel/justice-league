import { theme } from '@/helpers/theme';
import { gridLinesCoordinates } from '@/components/views/Hero/Profile/Stats/utils';

const ChartGrid: React.FC = () => (
  <g>
    {gridLinesCoordinates.map((gridLine) => (
      <line
        key={gridLine.id}
        strokeDasharray="2 2"
        stroke={theme.neutral}
        x1={gridLine.initPosX}
        y1={gridLine.initPosY}
        x2={gridLine.endPosX}
        y2={gridLine.endPosY}
      />
    ))}
  </g>
);

export default ChartGrid;
