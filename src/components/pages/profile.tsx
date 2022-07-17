import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import {
  HeroId,
  ProfileIntroData,
  ProfileDetailsData,
  ProfileAppearanceData,
  ProfileStatsData,
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

  const { imagesPreloaded } = useImagePreloader([
    currentHeroData?.colorLogoPath as string,
    currentHeroData?.profile.imagePath as string,
    currentHeroData?.profile.details.imagePath as string,
    currentHeroData?.profile.appearance.imagePath as string,
  ]);

  const heroColor = heroColors[id as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[id as HeroId];

  const introData: ProfileIntroData = {
    semiTransparentColor: heroSemiTransparentColor,
    imgPath: currentHeroData?.profile.imagePath as string,
    title: currentHeroData?.name || '',
    subtitle: currentHeroData?.alias || '',
    description: currentHeroData?.description || '',
  };
  const detailsData: ProfileDetailsData = {
    color: heroColor,
    semiTransparentColor: heroSemiTransparentColor,
    imgPath: currentHeroData?.profile.details.imagePath as string,
    fullName: currentHeroData?.profile.details.fullName || '',
    birthPlace: currentHeroData?.profile.details.birthPlace || '',
    occupation: currentHeroData?.profile.details.occupation || '',
    base: currentHeroData?.profile.details.base || '',
    firstAppearance: currentHeroData?.profile.details.firstAppearance || '',
  };
  const appearanceData: ProfileAppearanceData = {
    color: heroColor,
    imgPath: currentHeroData?.profile.appearance.imagePath as string,
    race: currentHeroData?.profile.appearance.race || '',
    height: currentHeroData?.profile.appearance.height || '',
    weight: currentHeroData?.profile.appearance.weight || '',
    eyeColor: currentHeroData?.profile.appearance.eyeColor || '',
    hairColor: currentHeroData?.profile.appearance.hairColor || '',
    powers: currentHeroData?.profile.powers || [],
  };
  const statsData: ProfileStatsData = {
    color: heroColor,
    skills: currentHeroData?.profile.skills || [],
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
          heroLogoPath={currentHeroData?.colorLogoPath || ''}
          introData={introData}
          detailsData={detailsData}
          appearanceData={appearanceData}
          statsData={statsData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Profile;
