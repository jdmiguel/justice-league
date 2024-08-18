import { useEffect } from 'react';
import metasDB from '@/db/metas.json';
import { useIntro } from '@/contexts/IntroContext';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const Root: React.FC = () => {
  const { isNavigating, initNavigation, endNavigation, updateActivePageId } = useCustomNavigation();

  const { isIntroVisible } = useIntro();

  const heroMetasData = metasDB;

  //useLockedBody();

  useEffect(() => {
    updateActivePageId('root');
  }, [updateActivePageId]);

  return (
    <>
      {isIntroVisible && <Intro />}
      <Layout>
        <Header>
          <Header.Logo isLeaving={isNavigating} />
          <Header.Corner isLeaving={isNavigating} />
        </Header>
        <HeroMenu
          heroMetas={heroMetasData}
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
