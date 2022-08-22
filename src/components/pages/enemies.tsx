import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_ENEMIES } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, PageId, EnemiesData } from '@/helpers/types';
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
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [enemiesData, setEnemiesData] = useState<EnemiesData>(DEFAULT_ENEMIES);
  const { id: currentHeroId } = useParams<Params>();
  const { isIntroVisible } = useIntro();
  const { updateHero } = useHero();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();

  useEffect(() => {
    const getProfile = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getEnemies/${heroId}`);
        const fetchedEnemiesData = await res.json();
        setEnemiesData(fetchedEnemiesData);
        setRequestStatus('SUCCESS');
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    getProfile(currentHeroId as HeroId);
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

  const enemiesImages = enemiesData.enemiesList.map((enemy) => enemy.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    enemiesData.colorLogoPath as string,
    ...enemiesImages,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];

  const isLeaving = isNavigating && nextPagePath === '/';

  return (
    <>
      {isIntroVisible && <Intro idParam={currentHeroId} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="enemies"
            onClick={(pageId: PageId) =>
              initNavigation({ heroId: currentHeroId as HeroId, pageId })
            }
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        {requestStatus === 'LOADING' || !imagesPreloaded ? (
          <Loader shouldFitWithHeaderPage />
        ) : (
          <EnemiesView
            color={heroColor}
            semiTransparentColor={heroSemiTransparentColor}
            enemiesData={enemiesData}
            isLeaving={isNavigating}
            onEndFadeAnimation={endNavigation}
          />
        )}
      </Layout>
    </>
  );
};

export default Enemies;
