import { useWheel } from '@use-gesture/react';
import { Lethargy } from 'lethargy';
import styled from 'styled-components';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';
import { animation, ease } from '@/helpers/theme';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';
import Sidedrawer from '@/components/views/HeroMenu/Sidedrawer';
import HeroLogo from '@/components/views/HeroMenu/HeroLogo';
import HeroHeading from '@/components/views/HeroMenu/HeroHeading';

export const StyledHeroMenu = styled.main<{ isFaded: boolean }>`
  opacity: ${({ isFaded }) => isFaded && 0};
  transition: opacity 1s ${ease.smooth} 0.2s;
`;

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

const lethargy = new Lethargy();

const HeroMenu: React.FC = () => {
  const {
    heroes,
    activeHeroIndex,
    prevActiveHeroIndex,
    lastHeroIndex,
    updatePrevActiveHeroIndex,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
    onInitChangeHero,
    onEndChangeHero,
    isHeroHighlighted,
    onInitHighlightHero,
    onEndHighlightHero,
    isLeavingMenu,
    onInitLeaveMenu,
    onEndLeaveMenu,
  } = useHeroMenu();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (last) {
      return false;
    }

    const deltaY = lethargy.check(event);

    if (!deltaY) {
      return false;
    }

    if (!wait) {
      if (deltaY === 1) {
        setActiveNextHero();
      }
      if (deltaY === -1) {
        setActivePrevHero();
      }
      return true;
    }
  });

  return (
    <StyledHeroMenu isFaded={isLeavingMenu} {...bind()}>
      <HeroBg heroes={heroes} isDarkened={isHeroHighlighted} />
      <Sidedrawer heroes={heroes} onClick={setActiveHero} />
      <HeroLogo
        heroes={heroes}
        activeHeroIndex={activeHeroIndex}
        prevActiveHeroIndex={prevActiveHeroIndex}
        lastHeroIndex={lastHeroIndex}
        isHighlighted={isHeroHighlighted}
        isFaded={isLeavingMenu}
      />
      <HeroHeading
        heroes={heroes}
        activeHeroIndex={activeHeroIndex}
        prevActiveHeroIndex={prevActiveHeroIndex}
        onDistanceChars={onInitHighlightHero}
        onShrinkChars={onEndHighlightHero}
        onInitChange={onInitChangeHero}
        onEndChange={onEndChangeHero}
        onUpdatePrevActiveHeroIndex={updatePrevActiveHeroIndex}
        onClick={onInitLeaveMenu}
        onLeave={onEndLeaveMenu}
      />
      <StyledGrainedBg />
    </StyledHeroMenu>
  );
};

export default HeroMenu;
