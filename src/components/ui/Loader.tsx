import styled, { keyframes } from 'styled-components';
import classicLogoPath from '@/assets/svg/dc-classic-logo.svg';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const StyledLoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledLoader = styled.img`
  will-change: transform;
  animation: ${rotate} 1.5s linear infinite;
`;

const Loader = () => (
  <StyledLoaderWrapper>
    <StyledLoader src={classicLogoPath} alt="classic dc logo" height={60} width={60} />
  </StyledLoaderWrapper>
);

export default Loader;
