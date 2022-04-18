import styled, { keyframes } from 'styled-components';
import superman from '@/assets/heroBg/superman.jpg';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';

const noise = keyframes`
  0% {
    transform: translate(-10%, 10%);
  }
  10% {
    transform: translate(-25%);
  }
  20% {
    transform: translate(-30%, 10%);
  }
  30% {
    transform: translate(-30%, 30%);
  }
  40% {
    transform: translate();
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(-20%, 20%);
  }
  70% {
    transform: translate(-5%, 20%);
  }
  80% {
    transform: translate(-25%, 5%);
  }
  90% {
    transform: translate(-30%, 25%);
  }
  100% {
    transform: translate(-10%, 10%);
  }
`;

export const StyledHeroBgWrapper = styled.div``;

export const StyledHeroBg = styled.div<{ bgPath: string }>`
  background-image: ${({ bgPath }) => `url(${bgPath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const StyledNoiseBg = styled.div`
  animation: ${noise} 5s infinite;
  animation-timing-function: steps(10);
  backface-visibility: hidden;
  background-image: url(${noiseTexturePath});
  background-color: ${({ theme }) => theme.alphaDark};
  height: 300%;
  left: -100%;
  position: absolute;
  top: -100%;
  transform: translateZ(0);
  width: 300%;
  will-change: transform;
  z-index: 2;
`;

const HeroBg: React.FC = () => (
  <>
    <StyledHeroBg bgPath={superman} />
    <StyledNoiseBg />
  </>
);

export default HeroBg;
