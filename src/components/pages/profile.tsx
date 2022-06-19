import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import introImgPath from '@/assets/hero/superman/profile/intro.jpg';
import detailsImgPath from '@/assets/hero/superman/profile/details.jpg';
import appearanceImgPath from '@/assets/hero/superman/profile/appearance.png';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import {
  HeroId,
  ProfileIntroData,
  ProfileDetailsData,
  ProfileAppearanceData,
  PageId,
} from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import useImagePreloader from '@/hooks/useImagePreloader';
import Intro from '@/components/views/Intro';
import ProfileView from '@/components/views/Hero/Profile';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Loader from '@/components/ui/Loader';

const Profile: React.FC = () => {
  const { id } = useParams<Params>();
  const { isIntroVisible } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();
  const { imagesPreloaded } = useImagePreloader([introImgPath, detailsImgPath, appearanceImgPath]);

  useEffect(() => {
    updateHero(id as HeroId);
  }, [id, updateHero]);

  useEffect(() => {
    if (isIntroVisible) {
      return;
    }

    updateLocked(false);
  }, [isIntroVisible, updateLocked]);

  /* It will be replaced with a GET request*/
  const currentHeroData = heroesData.find((hero) => hero.id === id);
  const introData: ProfileIntroData = {
    semiTransparentColor: heroSemiTransparentColors[id as HeroId],
    imgPath: introImgPath,
    title: currentHeroData?.name || '',
    subtitle: currentHeroData?.alias || '',
    description: currentHeroData?.description || '',
  };
  const detailsData: ProfileDetailsData = {
    semiTransparentColor: heroSemiTransparentColors[id as HeroId],
    color: heroColors[id as HeroId],
    imgPath: detailsImgPath,
    fullName: currentHeroData?.profile.fullName || '',
    birthPlace: currentHeroData?.profile.birthPlace || '',
    occupation: currentHeroData?.profile.occupation || '',
    base: currentHeroData?.profile.base || '',
    firstAppearance: currentHeroData?.profile.firstAppearance || '',
  };
  const appearanceData: ProfileAppearanceData = {
    color: heroColors[id as HeroId],
    imgPath: appearanceImgPath,
    race: currentHeroData?.appearance.race || '',
    height: currentHeroData?.appearance.height || '',
    weight: currentHeroData?.appearance.weight || '',
    eyeColor: currentHeroData?.appearance.eyeColor || '',
    hairColor: currentHeroData?.appearance.hairColor || '',
    powers: currentHeroData?.powers || [],
  };

  const isLeaving = isNavigating && nextPagePath === '/';

  if (!imagesPreloaded) {
    return <Loader />;
  }

  return (
    <>
      {isIntroVisible && <Intro idParam={id} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="profile"
            onClick={(pageId: PageId) => initNavigation({ heroId: id as HeroId, pageId })}
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <ProfileView
          heroId={id as HeroId}
          introData={introData}
          detailsData={detailsData}
          appearanceData={appearanceData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Profile;
