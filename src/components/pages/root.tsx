import { useEffect } from 'react';
import { DEFAULT_HERO_METAS } from '@/helpers';
import { HeroMeta } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useFetchHeroData from '@/hooks/useFetchHeroData';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import Loader from '@/components/ui/Loader';

const Root: React.FC = () => {
  const { isNavigating, initNavigation, endNavigation, updateActivePageId } = useCustomNavigation();

  const { isIntroVisible } = useIntro();

  const { heroData: heroMetasData, requestStatus } = useFetchHeroData<HeroMeta[]>(
    DEFAULT_HERO_METAS,
    '/.netlify/functions/getMetas',
  );

  useLockedBody();

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
