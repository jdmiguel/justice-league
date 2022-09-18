import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/animations';
import { ProfileData } from '@/helpers/types';
import Intro from '@/components/views/Hero/Profile/Intro';
import Detail from '@/components/views/Hero/Profile/Detail';
import Appearance from '@/components/views/Hero/Profile/Appearance';
import Stats from '@/components/views/Hero/Profile/Stats';
import { StyledProfileWrapper, StyledProfile } from '@/components/views/Hero/Profile/styles';

type Props = {
  profileData: ProfileData;
  heroColor: string;
  heroSemiTransparentColor: string;
  isLeaving: boolean;
  onEndFadeAnimation: () => void;
};

const Profile: React.FC<Props> = ({
  profileData,
  heroColor,
  heroSemiTransparentColor,
  isLeaving,
  onEndFadeAnimation,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const {
    name,
    colorLogoPath,
    intro: introData,
    detail: detailData,
    appearance: appearanceData,
    powers,
    skills,
  } = profileData;

  return (
    <StyledProfileWrapper data-testid="profile" bgLogoPath={colorLogoPath} isLeaving={isLeaving}>
      <StyledProfile ref={profileRef}>
        <Intro heroName={name} data={introData} semiTransparentColor={heroSemiTransparentColor} />
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
