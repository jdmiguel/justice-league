import { useEffect } from 'react';
import { useParams, Params, useLocation, Outlet } from 'react-router-dom';
import { HeroId, PageId } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useLockedBody from '@/hooks/useLockedBody';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Intro from '@/components/views/Intro';

const Hero: React.FC = () => {
  const { id: currentHeroId } = useParams<Params>();
  const { pathname } = useLocation();

  const pageIdIndexInPagePath = pathname.lastIndexOf('/') + 1;
  const pageIdFromPagePath = pathname.slice(pageIdIndexInPagePath, pathname.length);

  const {
    nextPagePath,
    isNavigating,
    initNavigation,
    activeHeroId,
    activePageId,
    updateActiveHeroId,
    updateActivePageId,
  } = useCustomNavigation();
  const { isIntroVisible } = useIntro();
  const { updateLocked } = useLockedBody();

  const isLeaving = isNavigating && nextPagePath === '/';

  useEffect(() => {
    updateActiveHeroId(currentHeroId as HeroId);
    updateActivePageId(pageIdFromPagePath as PageId);
  }, [currentHeroId, pageIdFromPagePath, updateActiveHeroId, updateActivePageId]);

  useEffect(() => {
    if (isIntroVisible) {
      return;
    }

    updateLocked(false);
  }, [isIntroVisible, updateLocked]);

  const updatedActivePageId = pageIdFromPagePath === activeHeroId ? 'profile' : activePageId;

  return (
    <>
      {isIntroVisible && <Intro idParam={currentHeroId} />}
      <Layout>
        <Header isSticky>
          <Header.Logo
            onClick={() => initNavigation({ heroId: currentHeroId as HeroId, pageId: 'root' })}
            isLeaving={isLeaving}
          />
          <Header.Navigation
            pageId={updatedActivePageId as PageId}
            onClick={(pageId: PageId) =>
              initNavigation({ heroId: currentHeroId as HeroId, pageId })
            }
            isLeaving={isLeaving}
          />
          <Header.Divider isLeaving={isLeaving} />
        </Header>
        <Outlet />
      </Layout>
    </>
  );
};

export default Hero;
