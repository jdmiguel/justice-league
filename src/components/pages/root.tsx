import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IntroContext from '@/contexts/IntroContext';
import Intro from '@/components/views/Intro';

export const StyledRoot = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.light};
  height: 100vh;
  width: 100%;
`;

const Root: React.FC = () => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <StyledRoot>
      {isIntroDisplayed && <Intro />}
      <Link to="/batman">GO TO BATMAN PAGE</Link>
    </StyledRoot>
  );
};

export default Root;
