import { ReactNode } from 'react';
import { ChartDetails } from '@/components/views/Hero/Profile/Stats/utils';

type Props = {
  children: ReactNode;
};

const Chart: React.FC<Props> = ({ children }) => (
  <svg
    viewBox={`0 0 ${ChartDetails.width} ${ChartDetails.height}`}
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMax meet"
  >
    {children}
  </svg>
);

export default Chart;
