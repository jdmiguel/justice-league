import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { getLogoPath } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroId } from '@/helpers/types';
import { StyledMediaWrapper } from '@/components/views/Hero/Media/styles';

type Props = {
  heroId: HeroId;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Media: React.FC<Props> = ({ heroId, isLeaving, onEndFadeAnimation }) => {
  const tweenRef = useRef<GSAPTween>();
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    tweenRef.current = gsap.to(mediaRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndFadeAnimation);
  }, [isLeaving, onEndFadeAnimation]);

  const heroLogoPath = getLogoPath(heroId);

  return (
    <StyledMediaWrapper
      ref={mediaRef}
      heroLogoPath={heroLogoPath}
    >{`IS MEDIA PAGE OF ${heroId}`}</StyledMediaWrapper>
  );
};

export default Media;
