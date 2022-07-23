import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { StyledEnemiesWrapper } from '@/components/views/Hero/Enemies/styles';

type Props = {
  heroLogoPath: string;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Enemies: React.FC<Props> = ({ heroLogoPath, isLeaving, onEndFadeAnimation }) => {
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

  return (
    <StyledEnemiesWrapper ref={mediaRef} heroLogoPath={heroLogoPath} isLeaving={isLeaving}>
      IS ENEMIES PAGE
    </StyledEnemiesWrapper>
  );
};

export default Enemies;
