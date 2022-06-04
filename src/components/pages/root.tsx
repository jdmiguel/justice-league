import { useIntro } from '@/contexts/IntroContext';
import useHeroNavigation from '@/hooks/useHeroNavigation';
import Intro from '@/components/views/Intro';
import HeroMenu from '@/components/views/HeroMenu';
import Layout from '@/components/layouts/Layout';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const Root: React.FC = () => {
  const { isNavigating, initNavigation, endNavigation } = useHeroNavigation();
  const { isDisplayed: isIntroDisplayed } = useIntro();

  return (
    <>
      {isIntroDisplayed && <Intro />}
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
