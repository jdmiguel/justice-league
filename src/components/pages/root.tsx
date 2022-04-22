import { useContext } from 'react';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';
import Layout from '@/components/views/Layout';
import HeroMenu from '@/components/views/HeroMenu';

const Root: React.FC = () => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <>
      {!isIntroDisplayed && <Intro />}
      <Layout>
        <HeroMenu />
      </Layout>
    </>
  );
};

export default Root;
