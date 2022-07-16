import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { TimelineEventsData } from '@/helpers/types';
import Event from '@/components/views/Hero/Timeline/Event';
import { StyledTimelineWrapper, StyledTimeline } from '@/components/views/Hero/Timeline/styles';

type Props = {
  heroLogoPath: string;
  color: string;
  semiTransparentColor: string;
  eventsData: TimelineEventsData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Timeline: React.FC<Props> = ({
  heroLogoPath,
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

  return (
    <StyledTimelineWrapper ref={timelineRef} heroLogoPath={heroLogoPath} isLeaving={isLeaving}>
      <StyledTimeline>
        {eventsData.map((event, index) => (
          <Event
            key={event.year}
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
