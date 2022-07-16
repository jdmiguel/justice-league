import { StyledYearBubble } from '@/components/views/Hero/Timeline/styles';

type Props = {
  color: string;
  cardXPosition: 'left' | 'right';
  year: string;
  isFirst: boolean;
  isVisible: boolean;
};

const YearBubble: React.FC<Props> = ({ color, cardXPosition, year, isFirst, isVisible }) => (
  <StyledYearBubble
    color={color}
    cardXPosition={cardXPosition}
    isFirst={isFirst}
    isVisible={isVisible}
  >
    {year}
  </StyledYearBubble>
);

export default YearBubble;
