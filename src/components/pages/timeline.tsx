import { useParams, Params } from 'react-router-dom';
import { DEFAULT_EVENTS } from '@/helpers';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import { HeroId, EventsData } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useFetchHeroData from '@/hooks/useFetchHeroData';
import useImagePreloader from '@/hooks/useImagePreloader';
import TimelineView from '@/components/views/Hero/Timeline';
import Loader from '@/components/ui/Loader';

const Timeline: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const { heroData: eventsData, requestStatus } = useFetchHeroData<EventsData>(
    DEFAULT_EVENTS,
    `/.netlify/functions/getEvents/${currentHeroId}`,
  );

  const eventImages = eventsData.eventsList.map((event) => event.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    eventsData.colorLogoPath as string,
    ...eventImages,
  ]);

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <>
      {requestStatus === 'LOADING' || !imagesPreloaded ? (
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
