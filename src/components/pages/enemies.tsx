import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_ENEMIES } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, EnemiesData } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useImagePreloader from '@/hooks/useImagePreloader';
import EnemiesView from '@/components/views/Hero/Enemies';
import Loader from '@/components/ui/Loader';

const Enemies: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [enemiesData, setEnemiesData] = useState<EnemiesData>(DEFAULT_ENEMIES);
  const { id: currentHeroId } = useParams<Params>();
  const { isNavigating, endNavigation } = useCustomNavigation();

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

  const enemiesImages = enemiesData.enemiesList.map((enemy) => enemy.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    enemiesData.colorLogoPath as string,
    ...enemiesImages,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];

  return (
    <>
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
    </>
  );
};

export default Enemies;
