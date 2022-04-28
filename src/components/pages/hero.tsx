import { useContext } from 'react';
import { useParams, Params } from 'react-router-dom';
import styled from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';

const StyledHero = styled.div`
  background-color: ${({ theme }) => theme.dark};
  height: 100vh;
  width: 100%;
`;

const Document: React.FC = () => {
  const { id } = useParams<Params>();

  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return <StyledHero>{isIntroDisplayed && <Intro idParam={id} />}</StyledHero>;
};

export default Document;
