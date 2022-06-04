import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { HeroId } from '@/helpers/types';
import { StyledProfile } from '@/components/views/Hero/styles';

type Props = {
  heroId: HeroId;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({ heroId, isLeaving, onEndFadeAnimation }) => {
  const tweenRef = useRef<GSAPTween>();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    tweenRef.current = gsap.to(profileRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndFadeAnimation);
  }, [isLeaving, onEndFadeAnimation]);

  return <StyledProfile ref={profileRef}>{`IS PROFILE PAGE OF ${heroId}`}</StyledProfile>;
};

export default Profile;
