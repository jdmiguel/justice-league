import styled from 'styled-components';

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 6;
`;

export const StyledLogo = styled.svg`
  opacity: 0;
  position: absolute;
  transform: scale(0.2);
  transform-origin: '50% 50%';
  width: 35vw;
`;

export const StyledChars = styled.svg`
  position: absolute;
  width: 45vw;
`;

export const StyledChar = styled.path`
  opacity: 0;
`;
