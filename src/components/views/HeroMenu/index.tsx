import { useState } from 'react';
import styled from 'styled-components';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';
import { animation } from '@/helpers/theme';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';

export const StyledGrainedBg = styled.div`
  animation: ${animation.noise} 5s infinite;
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

const HeroMenu: React.FC = () => {
  const { heroes, setActivePrevHero, setActiveNextHero } = useHeroMenu();

  return (
    <>
      <button
        style={{ position: 'absolute', zIndex: 4, top: 20, left: 200, cursor: 'pointer' }}
        onClick={setActivePrevHero}
      >
        PREV
      </button>
      <button
        style={{ position: 'absolute', zIndex: 4, top: 20, left: 250, cursor: 'pointer' }}
        onClick={setActiveNextHero}
      >
        NEXT
      </button>
      <HeroBg heroes={heroes} />
      <StyledGrainedBg />
    </>
  );
};

export default HeroMenu;
