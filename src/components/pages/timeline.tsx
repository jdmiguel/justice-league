import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_EVENTS } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, EventsData } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useImagePreloader from '@/hooks/useImagePreloader';
import TimelineView from '@/components/views/Hero/Timeline';
import Loader from '@/components/ui/Loader';

const Timeline: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [eventsData, setEventsData] = useState<EventsData>(DEFAULT_EVENTS);
  const { id: currentHeroId } = useParams<Params>();
  const { isNavigating, endNavigation } = useCustomNavigation();

  useEffect(() => {
    const getProfile = async (heroId: HeroId) => {
      try {
        const res = await fetch(`/.netlify/functions/getEvents/${heroId}`);
        const fetchedEnemiesData = await res.json();
        setEventsData(fetchedEnemiesData);
        setRequestStatus('SUCCESS');
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    getProfile(currentHeroId as HeroId);
  }, [currentHeroId]);

  const eventImages = eventsData.eventsList.map((event) => event.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    eventsData.colorLogoPath as string,
    ...eventImages,
  ]);

  const heroColor = heroColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[currentHeroId as HeroId];

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
