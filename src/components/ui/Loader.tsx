import styled, { keyframes } from 'styled-components';
import classicLogoPath from '@/assets/svg/classic-dc-logo.svg';

const beat = keyframes`
  0% {  transform: scale(1); opacity: 1 }
  50% {  transform: scale(0.95); opacity: 0.7 }
  100% { transform: scale(1); opacity: 1 }
`;

const StyledLoaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledLoader = styled.img`
  will-change: transform, opacity;
  animation: ${beat} 1.8s ease-in-out infinite;
`;

const Loader = () => (
  <StyledLoaderWrapper>
    <StyledLoader src={classicLogoPath} alt="classic dc logo" height={60} width={60} />
  </StyledLoaderWrapper>
);

export default Loader;
