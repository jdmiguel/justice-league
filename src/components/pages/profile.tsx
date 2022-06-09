import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import introImgPath from '@/assets/hero/superman/profile/intro.jpg';
import detailsImgPath from '@/assets/hero/superman/profile/details.jpg';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { HeroId, ProfileIntroData, ProfileDetailsData, PageId } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import ProfileView from '@/components/views/Hero/Profile';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';

const Profile: React.FC = () => {
  const { id } = useParams<Params>();
  const { isDisplayed: isIntroDisplayed } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();

  useEffect(() => {
    updateHero(id as HeroId);
  }, [id, updateHero]);

  useEffect(() => {
    if (isIntroDisplayed) {
      return;
    }

    updateLocked(false);
  }, [isIntroDisplayed, updateLocked]);

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

  const isLeaving = isNavigating && nextPagePath === '/';

  return (
    <>
      {isIntroDisplayed && <Intro idParam={id} />}
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
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Profile;
