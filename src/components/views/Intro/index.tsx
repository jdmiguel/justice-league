import styled from 'styled-components';
import Chars from '@/components/views/Intro/Chars';

export const StyledIntro = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.light};
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const Intro: React.FC = () => (
  <StyledIntro>
    <Chars />
  </StyledIntro>
);

export default Intro;
