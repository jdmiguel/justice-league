import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNoMatch = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.light};
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  height: 100vh;
  width: 100%;
  span {
    position: relative;
    &:after {
      background-color: ${({ theme }) => theme.light};
      bottom: 0;
      content: '';
      position: absolute;
      height: 1px;
      left: 0;
      transition: transform 0.2s ease-out;
      width: 100%;
    }
    &:hover {
      &:after {
        transform: scaleX(0);
      }
    }
  }
`;

const NoMatch: React.FC = () => (
  <StyledNoMatch>
    <p>The URL path does not match with any existing route</p>
    <Link to="/">
      <span>GO TO HOME</span>
    </Link>
  </StyledNoMatch>
);

export default NoMatch;
