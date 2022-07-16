import Card from '@/components/views/Hero/Timeline/Card';
import YearBubble from '@/components/views/Hero/Timeline/YearBubble';
import { StyledEvent } from '@/components/views/Hero/Timeline/styles';

type Props = {
  isLastEvent: boolean;
  xOrigin: 'left' | 'right';
  color: string;
  semiTransparentColor: string;
  imagePath: string;
  title: string;
  description: string;
  year: string;
  isVisible: boolean;
};

const Event: React.FC<Props> = ({
  isLastEvent,
  xOrigin,
  color,
  semiTransparentColor,
  imagePath,
  title,
  description,
  isVisible,
  year,
}) => (
  <StyledEvent>
    <Card
      key={title}
      color={color}
      semiTransparentColor={semiTransparentColor}
      imagePath={imagePath}
      title={title}
      description={description}
      isVisible
    />
    <YearBubble color={color} isLast={isLastEvent} cardXPosition={xOrigin} year={year} />
  </StyledEvent>
);

export default Event;
