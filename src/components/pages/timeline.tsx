import { useState, useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { DEFAULT_EVENTS } from '@/helpers';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { RequestStatus, HeroId, PageId, EventsData } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import useImagePreloader from '@/hooks/useImagePreloader';
import Intro from '@/components/views/Intro';
import TimelineView from '@/components/views/Hero/Timeline';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Loader from '@/components/ui/Loader';

const Timeline: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [eventsData, setEventsData] = useState<EventsData>(DEFAULT_EVENTS);
  const { id: currentHeroId } = useParams<Params>();
  const { updateHero } = useHero();
  const { isIntroVisible } = useIntro();
  const { nextPagePath, isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { updateLocked } = useLockedBody();

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

  useEffect(() => {
    updateHero(currentHeroId as HeroId);
  }, [currentHeroId, updateHero]);

  useEffect(() => {
    if (isIntroVisible) {
      return;
    }

    updateLocked(false);
  }, [isIntroVisible, updateLocked]);

  const eventImages = eventsData.eventsList.map((event) => event.imagePath) as string[];
  const { imagesPreloaded } = useImagePreloader([
    eventsData.colorLogoPath as string,
    ...eventImages,
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
            pageId="timeline"
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
          <TimelineView
            color={heroColor}
            semiTransparentColor={heroSemiTransparentColor}
            eventsData={eventsData}
            isLeaving={isNavigating}
            onEndFadeAnimation={endNavigation}
          />
        )}
      </Layout>
    </>
  );
};

export default Timeline;
