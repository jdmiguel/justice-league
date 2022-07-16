import { StyledYearBubble } from '@/components/views/Hero/Timeline/styles';

type Props = {
  color: string;
  isLast: boolean;
  cardXPosition: 'left' | 'right';
  year: string;
};

const YearBubble: React.FC<Props> = ({ color, isLast, cardXPosition, year }) => (
  <StyledYearBubble color={color} isLast={isLast} cardXPosition={cardXPosition}>
    {year}
  </StyledYearBubble>
);

export default YearBubble;
