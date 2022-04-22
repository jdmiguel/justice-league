import { useState } from 'react';
import styled from 'styled-components';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';
import { animation } from '@/helpers/theme';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';
import Sidedrawer from '@/components/views/HeroMenu/Sidedrawer';
import HeroLogo from '@/components/views/HeroMenu/HeroLogo';
import HeroHeading from '@/components/views/HeroMenu/HeroHeading';

export const StyledGrainedBg = styled.div`
  animation: ${animation.noise} 5s infinite;
  animation-timing-function: steps(10);
  backface-visibility: hidden;
  background-image: url(${noiseTexturePath});
  background-color: ${({ theme }) => theme.alphaDark_65};
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
  const [isMenuHighlighted, setIsMenuHighlighted] = useState(false);

  const { heroes, setActiveHero, setActivePrevHero, setActiveNextHero } = useHeroMenu();

  return (
    <>
      <HeroBg heroes={heroes} isDarkened={isMenuHighlighted} />
      <Sidedrawer heroes={heroes} onClick={setActiveHero} />
      <HeroLogo heroes={heroes} />
      <HeroHeading
        heroes={heroes}
        onDistanceChars={() => setIsMenuHighlighted(true)}
        onShrinkChars={() => setIsMenuHighlighted(false)}
      />
      <StyledGrainedBg />
    </>
  );
};

export default HeroMenu;
