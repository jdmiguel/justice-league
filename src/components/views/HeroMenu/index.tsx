import { createUseGesture, dragAction, wheelAction } from '@use-gesture/react';
import { Lethargy } from 'lethargy';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';
import Sidedrawer from '@/components/views/HeroMenu/Sidedrawer';
import HeroLogo from '@/components/views/HeroMenu/HeroLogo';
import HeroHeading from '@/components/views/HeroMenu/HeroHeading';
import { StyledHeroMenu, StyledGrainedBg } from '@/components/views/HeroMenu/styles';

const lethargy = new Lethargy();
const useGesture = createUseGesture([dragAction, wheelAction]);

type Props = {
  leaveHeroMenu: () => void;
};

const HeroMenu: React.FC<Props> = ({ leaveHeroMenu }) => {
  const {
    heroes,
    activeHeroIndex,
    prevActiveHeroIndex,
    lastHeroIndex,
    updatePrevActiveHeroIndex,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
    initChangeHero,
    endChangeHero,
    isHeroHighlighted,
    highlightHero,
    dimHero,
    setDefaultMenuAppearance,
    isLeavingMenu,
    initLeaveMenu,
    endLeaveMenu,
  } = useHeroMenu();

  const bind = useGesture({
    onDrag: ({ swipe: [swipeX] }) => {
      if (swipeX === 1) {
        setActiveNextHero();
      }
      if (swipeX === -1) {
        setActivePrevHero();
      }
    },
    onWheel: ({ event, last, memo: wait = false }) => {
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
    },
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
        lastHeroIndex={lastHeroIndex}
        onDistanceChars={highlightHero}
        onInitShrinkChars={dimHero}
        onEndShrinkChars={setDefaultMenuAppearance}
        onInitChange={initChangeHero}
        onEndChange={endChangeHero}
        onUpdatePrevActiveHeroIndex={updatePrevActiveHeroIndex}
        onClick={() => {
          initLeaveMenu();
          leaveHeroMenu();
        }}
        onLeave={endLeaveMenu}
      />
      <StyledGrainedBg />
    </StyledHeroMenu>
  );
};

export default HeroMenu;
