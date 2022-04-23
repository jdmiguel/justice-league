import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ease } from '@/helpers/theme';
import { HeroMenuData as Hero } from '@/helpers/types';
import SupermanLogo from '@/components/views/HeroMenu/HeroLogo/SupermanLogo';
import BatmanLogo from '@/components/views/HeroMenu/HeroLogo/BatmanLogo';
import WonderWomanLogo from '@/components/views/HeroMenu/HeroLogo/WonderWomanLogo';
import FlashLogo from '@/components/views/HeroMenu/HeroLogo/FlashLogo';
import GreenLanternLogo from '@/components/views/HeroMenu/HeroLogo/GreenLanternLogo';
import GreenArrowLogo from '@/components/views/HeroMenu/HeroLogo/GreenArrowLogo';
import AquamanLogo from '@/components/views/HeroMenu/HeroLogo/AquamanLogo';
import CyborgLogo from '@/components/views/HeroMenu/HeroLogo/CyborgLogo';

export const StyledHeroLogo = styled.figure<{ isActive: boolean; isNextAnimation: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  position: absolute;
  transform: ${({ isActive, isNextAnimation }) =>
    isActive ? 'scale(1) rotate(0)' : `scale(1.5) rotate(${isNextAnimation ? '' : '-'}90deg)`};
  transform-origin: 50%;
  transition: all 0.9s ${ease.inOut};
  width: 100%;
  z-index: 4;
`;

type Props = {
  heroes: Hero[];
  isHighlighted: boolean;
};

const HeroLogo: React.FC<Props> = ({ heroes, isHighlighted }) => {
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(0);
  const [isNextAnimation, setIsNextAnimation] = useState(true);

  useEffect(() => {
    const activeHeroIndex = heroes.findIndex((hero) => hero.active);

    if (activeHeroIndex === prevActiveHeroIndex) {
      return;
    }

    setIsNextAnimation(activeHeroIndex > prevActiveHeroIndex);
    setPrevActiveHeroIndex(activeHeroIndex);
  }, [heroes, prevActiveHeroIndex]);

  const getLogo = (id: string) => {
    switch (id) {
      case 'superman':
      default:
        return <SupermanLogo isHighlighted={isHighlighted} />;
      case 'batman':
        return <BatmanLogo isHighlighted={isHighlighted} />;
      case 'wonderwoman':
        return <WonderWomanLogo isHighlighted={isHighlighted} />;
      case 'flash':
        return <FlashLogo isHighlighted={isHighlighted} />;
      case 'greenlantern':
        return <GreenLanternLogo isHighlighted={isHighlighted} />;
      case 'greenarrow':
        return <GreenArrowLogo isHighlighted={isHighlighted} />;
      case 'aquaman':
        return <AquamanLogo isHighlighted={isHighlighted} />;
      case 'cyborg':
        return <CyborgLogo isHighlighted={isHighlighted} />;
    }
  };

  return (
    <>
      {heroes.map((hero) => (
        <StyledHeroLogo key={hero.id} isActive={hero.active} isNextAnimation={isNextAnimation}>
          {getLogo(hero.id)}
        </StyledHeroLogo>
      ))}
    </>
  );
};

export default HeroLogo;
