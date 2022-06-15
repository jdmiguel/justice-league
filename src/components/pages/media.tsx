import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { HeroId, PageId } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useHero } from '@/contexts/HeroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import MediaView from '@/components/views/Hero/Media';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';

const Media: React.FC = () => {
  const { id } = useParams<Params>();
  const { isIntroVisible } = useIntro();
  const { updateHero } = useHero();
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

  const isLeaving = isNavigating && nextPagePath === '/';

  return (
    <>
      {isIntroVisible && <Intro idParam={id} />}
      <Layout>
        <Header isSticky>
          <Header.Logo onClick={() => initNavigation({ heroId: null, pageId: 'root' })} />
          <Header.Navigation
            pageId="media"
            onClick={(pageId: PageId) => initNavigation({ heroId: id as HeroId, pageId })}
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <MediaView
          heroId={id as HeroId}
          isLeaving={isNavigating}
          onEndFadeAnimation={endNavigation}
        />
      </Layout>
    </>
  );
};

export default Media;
