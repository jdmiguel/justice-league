import { useParams, Params } from 'react-router-dom';
import enemiesDB from '@/db/enemies.json';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useImagePreloader from '@/hooks/useImagePreloader';
import EnemiesView from '@/components/views/Hero/Enemies';
import Loader from '@/components/ui/Loader';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import fetchHeroData from '@/helpers/fetchHeroData';
import { HeroId, EnemiesData } from '@/helpers/types';

const Enemies: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const enemiesData = fetchHeroData<EnemiesData>({ db: enemiesDB, heroId: currentHeroId });

  const enemiesImages = enemiesData.enemies.map((enemy) => enemy.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    enemiesData.colorLogoPath as string,
    ...enemiesImages,
  ]);

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <>
      {!imagesPreloaded ? (
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
