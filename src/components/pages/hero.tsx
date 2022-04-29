import { useContext } from 'react';
import { useParams, Params } from 'react-router-dom';
import styled from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import Layout from '@/components/views/Layout';
import Intro from '@/components/views/Intro';

const StyledHero = styled.div`
  background-color: ${({ theme }) => theme.dark};
  width: 100%;
`;

const Document: React.FC = () => {
  const { id } = useParams<Params>();

  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <>
      {isIntroDisplayed && <Intro idParam={id} />}
      <Layout withNavigation>
        <StyledHero>FAKE TEXT</StyledHero>
      </Layout>
    </>
  );
};

export default Document;
