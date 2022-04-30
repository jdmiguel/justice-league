import { useState, useContext } from 'react';
import { useParams, useNavigate, Params } from 'react-router-dom';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';
import Layout from '@/components/layouts/Layout';

const Document: React.FC = () => {
  const [isLeaving, setIsLeaving] = useState(false);

  const { id } = useParams<Params>();
  const navigate = useNavigate();

  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  const onClickNavigation = (path: string) => {
    setIsLeaving(true);
    setTimeout(() => {
      navigate(path);
    }, 1000);
  };

  return (
    <>
      {isIntroDisplayed && <Intro idParam={id} />}
      <Layout isLeaving={isLeaving} onClickNavigation={onClickNavigation} withNavigation>
        {''}
      </Layout>
    </>
  );
};

export default Document;
