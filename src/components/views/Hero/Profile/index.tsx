import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { ProfileData } from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import Detail from '@/components/views/Hero/Profile/Detail';
import Appearance from '@/components/views/Hero/Profile/Appearance';
import Stats from '@/components/views/Hero/Profile/Stats';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

type Props = {
  heroLogoPath: string;
  heroColor: string;
  heroSemiTransparentColor: string;
  profileData: ProfileData;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({
  heroLogoPath,
  heroColor,
  heroSemiTransparentColor,
  profileData,
  isLeaving,
  onEndFadeAnimation,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const profileRef = useRef<HTMLDivElement>(null);

  const {
    intro: introData,
    detail: detailData,
    appearance: appearanceData,
    powers,
    skills,
  } = profileData;

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
        <Detail
          data={detailData}
          color={heroColor}
          semiTransparentColor={heroSemiTransparentColor}
        />
        <Appearance data={appearanceData} powers={powers} color={heroColor} />
        <Stats skills={skills} color={heroColor} />
      </StyledProfile>
    </StyledProfileWrapper>
  );
};

export default Profile;
