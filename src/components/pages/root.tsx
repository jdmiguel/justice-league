import { useEffect } from 'react';
import { useIntro } from '@/contexts/IntroContext';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useLockedBody from '@/hooks/useLockedBody';
import useHeroMetas from '@/hooks/useHeroMetas';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Loader from '@/components/ui/Loader';

const Root: React.FC = () => {
  const { heroMetas, requestStatus: requestStatusHeroMetas } = useHeroMetas();
  const { isNavigating, initNavigation, endNavigation, updateActivePageId } = useCustomNavigation();
  const { isIntroVisible } = useIntro();

  useLockedBody();

  useEffect(() => {
    updateActivePageId('root');
  }, [updateActivePageId]);

  if (requestStatusHeroMetas === 'LOADING') {
    return <Loader withLightBg={!!isIntroVisible} />;
  }

  return (
    <>
      {isIntroVisible && <Intro />}
      <Layout>
        <Header>
          <Header.Logo isLeaving={isNavigating} />
          <Header.Corner isLeaving={isNavigating} />
        </Header>
        <HeroMenu
          heroMetas={heroMetas}
          isLeaving={isNavigating}
          initLeave={(heroId) => initNavigation({ heroId, pageId: 'profile' })}
          endLeave={endNavigation}
        />
        <Footer isLeaving={isNavigating} />
      </Layout>
    </>
  );
};

export default Root;
