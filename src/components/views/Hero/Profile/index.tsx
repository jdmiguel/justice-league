import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { getLogoPath } from '@/helpers';
import { ease } from '@/helpers/theme';
import {
  HeroId,
  ProfileIntroData,
  ProfileDetailsData,
  ProfileAppearanceData,
} from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import Details from '@/components/views/Hero/Profile/Details';
import Appearance from '@/components/views/Hero/Profile/Appearance';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

type Props = {
  heroId: HeroId;
  introData: ProfileIntroData;
  detailsData: ProfileDetailsData;
  appearanceData: ProfileAppearanceData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({
  heroId,
  introData,
  detailsData,
  appearanceData,
  isLeaving,
  onEndFadeAnimation,
}) => {
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
    <StyledProfileWrapper heroLogoPath={heroLogoPath} isLeaving={isLeaving}>
      <StyledProfile ref={profileRef}>
        <Intro data={introData} />
        <Details data={detailsData} />
        <Appearance data={appearanceData} />
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export default Profile;
