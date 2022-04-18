import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';
import Layout from '@/components/views/Layout';

const Root: React.FC = () => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <>
      {isIntroDisplayed && <Intro />}
      <Layout>
        <Link to="/batman">GO TO BATMAN PAGE</Link>
      </Layout>
    </>
  );
};

export default Root;
