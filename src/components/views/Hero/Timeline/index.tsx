import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { getLogoPath } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroId } from '@/helpers/types';
import { StyledTimelineWrapper } from '@/components/views/Hero/Timeline/styles';

type Props = {
  heroId: HeroId;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Timeline: React.FC<Props> = ({ heroId, isLeaving, onEndFadeAnimation }) => {
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

  const heroLogoPath = getLogoPath(heroId);

  return (
    <StyledTimelineWrapper
      ref={timelineRef}
      heroLogoPath={heroLogoPath}
    >{`IS TIMELINE PAGE OF ${heroId}`}</StyledTimelineWrapper>
  );
};

export default Timeline;
