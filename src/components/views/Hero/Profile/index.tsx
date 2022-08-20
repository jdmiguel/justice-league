import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import {
  ProfileIntroData,
  ProfileDetailsData,
  ProfileStatsData,
  ProfileAppearanceData,
} from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import Details from '@/components/views/Hero/Profile/Details';
import Appearance from '@/components/views/Hero/Profile/Appearance';
import Stats from '@/components/views/Hero/Profile/Stats';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

type Props = {
  heroLogoPath: string;
  heroColor: string;
  heroSemiTransparentColor: string;
  introData: ProfileIntroData | null;
  detailsData: ProfileDetailsData;
  appearanceData: ProfileAppearanceData | null;
  powers: string[];
  statsData: ProfileStatsData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({
  heroLogoPath,
  heroColor,
  heroSemiTransparentColor,
  introData,
  detailsData,
  appearanceData,
  powers,
  statsData,
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

  return (
    <StyledProfileWrapper heroLogoPath={heroLogoPath} isLeaving={isLeaving}>
      <StyledProfile ref={profileRef}>
        <Intro data={introData} semiTransparentColor={heroSemiTransparentColor} />
        <Details data={detailsData} />
        <Appearance appearanceData={appearanceData} powers={powers} color={heroColor} />
        <Stats data={statsData} />
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export default Profile;
