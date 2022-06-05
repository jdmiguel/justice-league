import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import supermanImgPath from '@/assets/hero/superman/profile/intro.jpg';
import { getHero } from '@/helpers';
import { heroColors } from '@/helpers/theme';
import { HeroId, HeroIntroData, PageId } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import Intro from '@/components/views/Intro';
import ProfileView from '@/components/views/Hero/Profile';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';

const Profile: React.FC = () => {
  const { id } = useParams<Params>();
  const { isDisplayed: isIntroDisplayed } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();

  useEffect(() => {
    updateHero(id as HeroId);
  }, [id, updateHero]);

  const currentHeroData = heroesData.find((hero) => hero.id === id);
  const data = {
    color: heroColors[id as HeroId],
    imgPath: supermanImgPath,
    title: currentHeroData?.name,
    subtitle: currentHeroData?.alias,
    description: currentHeroData?.description,
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
          heroData={data as HeroIntroData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Profile;
