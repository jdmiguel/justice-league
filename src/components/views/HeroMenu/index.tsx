import { createUseGesture, dragAction, wheelAction } from '@use-gesture/react';
import { Lethargy } from 'lethargy';
import { HeroMeta, HeroId } from '@/helpers/types';
import { useCustomNavigation } from '@/contexts/CustomNavigationContext';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';
import Sidedrawer from '@/components/views/HeroMenu/Sidedrawer';
import HeroVectorLogo from '@/components/views/HeroMenu/HeroVectorLogo';
import HeroHeading from '@/components/views/HeroMenu/HeroHeading';
import { StyledHeroMenu, StyledGrainedBg } from '@/components/views/HeroMenu/styles';

const lethargy = new Lethargy();
const useGesture = createUseGesture([dragAction, wheelAction]);

type Props = {
  heroMetas: HeroMeta[];
  isLeaving: boolean;
  initLeave: (_: HeroId) => void;
  endLeave: () => void;
};

const HeroMenu: React.FC<Props> = ({ heroMetas, isLeaving, initLeave, endLeave }) => {
  const { activeHeroId } = useCustomNavigation();
  const {
    heroes,
    activeHeroIndex,
    prevActiveHeroIndex,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
    updatePrevActiveHeroIndex,
    isHeroChangeEnabled,
    enableHeroChange,
    disableHeroChange,
    isChangingHero,
    initChangeHero,
    endChangeHero,
    isHeroHighlighted,
    highlightHero,
    dimHero,
    isLeavingMenu,
    leaveMenu,
  } = useHeroMenu(activeHeroId as HeroId, heroMetas);

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

  const onClickSidedrawerItem = (id: HeroId) => {
    if (isChangingHero) {
      return;
    }

    setActiveHero(id);
  };

  const onHeadingDistanceChars = ({ isLeaving }: { isLeaving: boolean }) => {
    disableHeroChange();
    highlightHero();

    if (!isLeaving) {
      return;
    }

    leaveMenu();
    initLeave(heroes[activeHeroIndex].heroId);
  };

  return (
    <StyledHeroMenu isFaded={isLeaving} {...bind()}>
      <HeroBg heroes={heroes} isDarkened={isHeroHighlighted} />
      <Sidedrawer heroes={heroes} isChangingHero={isChangingHero} onClick={onClickSidedrawerItem} />
      <HeroVectorLogo
        heroes={heroes}
        activeHeroIndex={activeHeroIndex}
        prevActiveHeroIndex={prevActiveHeroIndex}
        isHighlighted={isHeroHighlighted}
        isFaded={isLeaving}
      />
      <HeroHeading
        heroes={heroes}
        activeHeroIndex={activeHeroIndex}
        prevActiveHeroIndex={prevActiveHeroIndex}
        onUpdatePrevActiveHeroIndex={updatePrevActiveHeroIndex}
        onEndIntroChars={enableHeroChange}
        onDistanceChars={onHeadingDistanceChars}
        onInitShrinkChars={dimHero}
        onEndShrinkChars={enableHeroChange}
        isHeroChangeEnabled={isHeroChangeEnabled}
        isChangingHero={isChangingHero}
        onInitChange={initChangeHero}
        onEndChange={endChangeHero}
        isFadingChars={isLeavingMenu}
        onLeave={endLeave}
      />
      <StyledGrainedBg />
    </StyledHeroMenu>
  );
};

export default HeroMenu;
