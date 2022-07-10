import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import { heroColors, heroSemiTransparentColors } from '@/helpers/theme';
import { HeroId, PageId, TimelineEventsData } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import TimelineView from '@/components/views/Hero/Timeline';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';

const Timeline: React.FC = () => {
  const { id } = useParams<Params>();
  const { updateHero } = useHero();
  const { isIntroVisible } = useIntro();
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
  const currentHeroData = heroesData.find((hero) => hero.id === id);
  const eventsData: TimelineEventsData = currentHeroData?.timeline.events || [];
  const heroColor = heroColors[id as HeroId];
  const heroSemiTransparentColor = heroSemiTransparentColors[id as HeroId];

  const isLeaving = isNavigating && nextPagePath === '/';

  return (
    <>
      {isIntroVisible && <Intro idParam={id} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="timeline"
            onClick={(pageId: PageId) => initNavigation({ heroId: id as HeroId, pageId })}
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <TimelineView
          heroLogoPath={currentHeroData?.colorLogoPath || ''}
          color={heroColor}
          semiTransparentColor={heroSemiTransparentColor}
          eventsData={eventsData}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Timeline;
