import { useParams, Params } from 'react-router-dom';
import eventsDB from '@/db/events.json';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useImagePreloader from '@/hooks/useImagePreloader';
import TimelineView from '@/components/views/Hero/Timeline';
import Loader from '@/components/ui/Loader';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import fetchHeroData from '@/helpers/fetchHeroData';
import { HeroId, EventsData } from '@/helpers/types';

const Timeline: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const eventsData = fetchHeroData<EventsData>({ db: eventsDB, heroId: currentHeroId });

  const eventImages = eventsData.events.map((event) => event.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    eventsData.colorLogoPath as string,
    ...eventImages,
  ]);

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <>
      {!imagesPreloaded ? (
        <Loader shouldFitWithHeaderPage />
      ) : (
        <TimelineView
          color={heroColor}
          semiTransparentColor={heroSemiTransparentColor}
          eventsData={eventsData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      )}
    </>
  );
};

export default Timeline;
