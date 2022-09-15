import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/animations';
import { EventsData } from '@/helpers/types';
import Event from '@/components/views/Hero/Timeline/Event';
import { StyledTimelineWrapper, StyledTimeline } from '@/components/views/Hero/Timeline/styles';

type Props = {
  color: string;
  semiTransparentColor: string;
  eventsData: EventsData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Timeline: React.FC<Props> = ({
  color,
  semiTransparentColor,
  eventsData,
  isLeaving,
  onEndFadeAnimation,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    tweenRef.current = gsap.to(timelineRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndFadeAnimation);
  }, [isLeaving, onEndFadeAnimation]);

  const { colorLogoPath, eventsList } = eventsData;

  return (
    <StyledTimelineWrapper
      data-testid="timeline"
      ref={timelineRef}
      heroLogoPath={colorLogoPath}
      isLeaving={isLeaving}
    >
      <StyledTimeline>
        {eventsList.map((event, index) => (
          <Event
            key={event.title}
            xOrigin={(index + 1) % 2 === 0 ? 'right' : 'left'}
            color={color}
            semiTransparentColor={semiTransparentColor}
            imagePath={event.imagePath}
            title={event.title}
            description={event.description}
            year={event.year}
            isFirstEvent={index === 0}
          />
        ))}
      </StyledTimeline>
    </StyledTimelineWrapper>
  );
};

export default Timeline;
