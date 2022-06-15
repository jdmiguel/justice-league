import { useIntro } from '@/contexts/IntroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import useLockedBody from '@/hooks/useLockedBody';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const Root: React.FC = () => {
  const { isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { isIntroVisible } = useIntro();

  useLockedBody();

  return (
    <>
      {isIntroVisible && <Intro />}
      <Layout>
        <Header>
          <Header.Logo />
          <Header.Corner isLeaving={isNavigating} />
        </Header>
        <HeroMenu
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
