import { useParams, Params } from 'react-router-dom';
import { DEFAULT_ENEMIES } from '@/helpers';
import { HeroId, EnemiesData } from '@/helpers/types';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useFetchHeroData from '@/hooks/useFetchHeroData';
import useImagePreloader from '@/hooks/useImagePreloader';
import EnemiesView from '@/components/views/Hero/Enemies';
import Loader from '@/components/ui/Loader';

const Enemies: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const { heroData: enemiesData, requestStatus } = useFetchHeroData<EnemiesData>(
    DEFAULT_ENEMIES,
    `/.netlify/functions/getEnemies/${currentHeroId}`,
  );

  const enemiesImages = enemiesData.enemiesList.map((enemy) => enemy.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    enemiesData.colorLogoPath as string,
    ...enemiesImages,
  ]);

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

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
