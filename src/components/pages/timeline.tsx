import { useParams, Params } from 'react-router-dom';
import eventsDB from '@/db/events.json';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import TimelineView from '@/components/views/Hero/Timeline';
import { heroSquadColors, heroSquadSemiTransparentColors } from '@/helpers/theme';
import fetchHeroData from '@/helpers/fetchHeroData';
import { HeroId, EventsData } from '@/helpers/types';

const Timeline: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();

  const { isNavigating, endNavigation } = useCustomNavigation();

  const eventsData = fetchHeroData<EventsData>({ db: eventsDB, heroId: currentHeroId });

  const heroColor = heroSquadColors[currentHeroId as HeroId];
  const heroSemiTransparentColor = heroSquadSemiTransparentColors[currentHeroId as HeroId];

  return (
    <TimelineView
      color={heroColor}
      semiTransparentColor={heroSemiTransparentColor}
      eventsData={eventsData}
      isLeaving={isNavigating}
      onEndFadeAnimation={endNavigation}
    />
  );
};

export default Timeline;
