import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { getLogoPath } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroId, HeroIntroData } from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

type Props = {
  heroId: HeroId;
  heroData: HeroIntroData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({ heroId, heroData, isLeaving, onEndFadeAnimation }) => {
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

  const heroLogoPath = getLogoPath(heroId);

  return (
    <StyledProfileWrapper heroLogoPath={heroLogoPath}>
      <StyledProfile ref={profileRef}>
        <Intro data={heroData} />
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export default Profile;
