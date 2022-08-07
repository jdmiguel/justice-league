import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { HeroId, PageId, EnemiesData } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import useImagePreloader from '@/hooks/useImagePreloader';
import Intro from '@/components/views/Intro';
import EnemiesView from '@/components/views/Hero/Enemies';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Loader from '@/components/ui/Loader';

const Enemies: React.FC = () => {
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
  const currentHeroData = heroesData.find((hero) => hero.meta.heroId === id);

  const enemyImages = currentHeroData?.enemies.enemiesList.map(
    (event) => event.imagePath,
  ) as string[];
  const { imagesPreloaded } = useImagePreloader([
    currentHeroData?.meta.colorLogoPath as string,
    ...enemyImages,
  ]);

  const enemiesData: EnemiesData = currentHeroData?.enemies.enemiesList || [];
  const heroColor = heroColors[id as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[id as HeroId];

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
            pageId="enemies"
            onClick={(pageId: PageId) => initNavigation({ heroId: id as HeroId, pageId })}
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <EnemiesView
          heroLogoPath={currentHeroData?.meta.colorLogoPath || ''}
          color={heroColor}
          semiTransparentColor={heroSemiTransparentColor}
          enemiesData={enemiesData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Enemies;
