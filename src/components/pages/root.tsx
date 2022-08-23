import { useState, useEffect } from 'react';
import { RequestStatus, HeroMeta } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Loader from '@/components/ui/Loader';

const Root: React.FC = () => {
  const [requestStatus, setRequestStatus] = useState<RequestStatus>('LOADING');
  const [heroMetas, setHeroMetas] = useState<HeroMeta[]>([]);
  const { isNavigating, initNavigation, endNavigation, updateActivePageId } = useCustomNavigation();
  const { isIntroVisible } = useIntro();

  useLockedBody();

  useEffect(() => {
    const getMetas = async () => {
      try {
        const res = await fetch('/.netlify/functions/getMetas');
        const metas = await res.json();

        setRequestStatus('SUCCESS');
        setHeroMetas(metas);
      } catch (err) {
        console.error(err);
        setRequestStatus('FAILURE');
      }
    };

    getMetas();
  }, []);

  useEffect(() => {
    updateActivePageId('root');
  }, [updateActivePageId]);

  if (requestStatus === 'LOADING') {
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
