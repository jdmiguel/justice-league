import { useContext } from 'react';
import { useParams, Params, Link } from 'react-router-dom';
import styled from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';

export const StyledHero = styled.div`
  background-color: ${({ theme }) => theme.dark};
  height: 100vh;
  width: 100%;
`;

const Document: React.FC = () => {
  const { id } = useParams<Params>();

  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <StyledHero>
      {isIntroDisplayed && <Intro idParam={id} />}
      <h2>{`${id} page`}</h2>
      <Link to="/">GO TO ROOT</Link>
    </StyledHero>
  );
};

export default Document;
