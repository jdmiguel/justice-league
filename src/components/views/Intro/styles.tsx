import styled from 'styled-components';

export const StyledIntro = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 7;
`;

export const StyledLogo = styled.svg`
  opacity: 0;
  position: absolute;
  transform: scale(0.2);
  transform-origin: '50% 50%';
  width: 40vh;
  @media only screen and (orientation: landscape) {
    width: 30vw;
  }
  @media only screen and (min-width: 768px) {
    width: 45vw;
  }
  @media only screen and (min-width: 992px) {
    width: 50vw;
  }
  @media only screen and (min-width: 1200px) {
    width: 35vw;
  }
`;

export const StyledChars = styled.svg`
  position: absolute;
  width: 40vh;
  @media only screen and (orientation: landscape) {
    width: 35vw;
  }
  @media only screen and (min-width: 768px) {
    width: 50vw;
  }
  @media only screen and (min-width: 992px) {
    width: 55vw;
  }
  @media only screen and (min-width: 1200px) {
    width: 45vw;
  }
`;

export const StyledChar = styled.path`
  opacity: 0;
`;
