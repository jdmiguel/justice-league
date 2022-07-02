import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  width: number;
  height: number;
};

const Chart: React.FC<Props> = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMax meet"
  >
    {children}
  </svg>
);

export default Chart;
