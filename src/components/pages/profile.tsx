import { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [introData, setIntroData] = useState<ProfileIntroData | null>(null);
  const [appearanceData, setAppearanceData] = useState<ProfileAppearanceData | null>(null);
  const [powers, setPowers] = useState<string[]>([]);

  const { id: currentHeroId } = useParams<Params>();
  const { isIntroVisible } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();

  useEffect(() => {
    const getProfile = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getProfile/${heroId}`);
        const fetchedIntroData = await res.json();
        setIntroData(fetchedIntroData);
      } catch (err) {
        console.error(err);
      }
    };

    const getAppearance = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getAppearance/${heroId}`);
        const fetchedAppearanceData = await res.json();
        setAppearanceData(fetchedAppearanceData);
      } catch (err) {
        console.error(err);
      }
    };

    const getPowers = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getPowers/${heroId}`);
        const fetchedPowers = await res.json();
        setPowers(fetchedPowers);
      } catch (err) {
        console.error(err);
      }
    };

    Promise.all([
      getProfile(currentHeroId as HeroId),
      getAppearance(currentHeroId as HeroId),
      getPowers(currentHeroId as HeroId),
    ]).finally(() => setIsLoading(false));
  }, [currentHeroId]);

  useEffect(() => {
    updateHero(currentHeroId as HeroId);
  }, [currentHeroId, updateHero]);

  useEffect(() => {
    if (isIntroVisible) {
      return;
    }

    updateLocked(false);
  }, [isIntroVisible, updateLocked]);

  /* It will be replaced with a GET request*/
  const currentHeroData = heroesData.find((hero) => hero.meta.heroId === currentHeroId);

  const { imagesPreloaded } = useImagePreloader([
    currentHeroData?.meta.colorLogoPath as string,
    currentHeroData?.profile.imagePath as string,
    currentHeroData?.profile.details.imagePath as string,
    currentHeroData?.profile.appearance.imagePath as string,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];
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
  const statsData: ProfileStatsData = {
    color: heroColor,
    skills: currentHeroData?.profile.skills || [],
  };

  const isLeaving = isNavigating && nextPagePath === '/';

  if (isLoading || !imagesPreloaded) {
    return <Loader />;
  }

  return (
    <>
      {isIntroVisible && <Intro idParam={currentHeroId} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="profile"
            onClick={(pageId: PageId) =>
              initNavigation({ heroId: currentHeroId as HeroId, pageId })
            }
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <ProfileView
          heroLogoPath={currentHeroData?.meta.colorLogoPath || ''}
          heroColor={heroColor}
          heroSemiTransparentColor={heroSemiTransparentColor}
          introData={introData}
          detailsData={detailsData}
          appearanceData={appearanceData}
          powers={powers}
          statsData={statsData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Profile;
