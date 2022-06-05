import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import supermanLogoPath from '@/assets/logo/color/superman.svg';
import batmanLogoPath from '@/assets/logo/color/batman.svg';
import wonderwomanLogoPath from '@/assets/logo/color/wonderwoman.svg';
import flashLogoPath from '@/assets/logo/color/flash.svg';
import greenlanternLogoPath from '@/assets/logo/color/greenlantern.svg';
import aquamanLogoPath from '@/assets/logo/color/aquaman.svg';
import greenarrowLogoPath from '@/assets/logo/color/greenarrow.svg';
import cyborgLogoPath from '@/assets/logo/color/cyborg.svg';
import { ease } from '@/helpers/theme';
import { HeroId, HeroIntroData } from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

const getLogoPath = (id: HeroId) => {
  switch (id) {
    case 'superman':
    default:
      return supermanLogoPath;
    case 'batman':
      return batmanLogoPath;
    case 'wonderwoman':
      return wonderwomanLogoPath;
    case 'flash':
      return flashLogoPath;
    case 'greenlantern':
      return greenlanternLogoPath;
    case 'aquaman':
      return aquamanLogoPath;
    case 'greenarrow':
      return greenarrowLogoPath;
    case 'cyborg':
      return cyborgLogoPath;
  }
};

type Props = {
  heroId: HeroId;
  heroData: HeroIntroData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({ heroId, heroData, isLeaving, onEndFadeAnimation }) => {
  const tweenRef = useRef<GSAPTween>();
  const profileWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isLeaving) {
      return;
    }

    tweenRef.current = gsap.to(profileWrapperRef.current, {
      duration: 0.5,
      opacity: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndFadeAnimation);
  }, [isLeaving, onEndFadeAnimation]);

  const heroLogoPath = getLogoPath(heroId);

  return (
    <StyledProfileWrapper ref={profileWrapperRef} heroLogoPath={heroLogoPath}>
      <StyledProfile>
        <Intro data={heroData} />
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export default Profile;
