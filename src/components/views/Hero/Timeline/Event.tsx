import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { TimelineCard } from '@/components/ui/Card';
import YearBubble from '@/components/views/Hero/Timeline/YearBubble';
import { StyledEvent } from '@/components/views/Hero/Timeline/styles';

type Props = {
  xOrigin: 'left' | 'right';
  color: string;
  semiTransparentColor: string;
  imagePath: string;
  title: string;
  description: string;
  year: string;
  isFirstEvent: boolean;
};

const Event: React.FC<Props> = ({
  xOrigin,
  color,
  semiTransparentColor,
  imagePath,
  title,
  description,
  year,
  isFirstEvent,
}) => {
  const eventRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(eventRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-12%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <StyledEvent ref={eventRef} isVisible={isVisible}>
      <TimelineCard
        key={title}
        color={color}
        semiTransparentColor={semiTransparentColor}
        imagePath={imagePath}
        title={title}
        description={description}
      />
      <YearBubble
        color={color}
        cardXPosition={xOrigin}
        year={year}
        isFirst={isFirstEvent}
        isVisible={isVisible}
      />
    </StyledEvent>
  );
};

export default Event;
