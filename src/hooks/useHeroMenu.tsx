import { useState, useEffect, useCallback } from 'react';
import { LAST_HERO_INDEX } from '@/helpers';
import { HeroId, HeroMenuData as Hero, HeroMeta } from '@/helpers/types';

const useHeroMenu = (heroId: HeroId, heroMetas: HeroMeta[]) => {
  const [heroes, setHeroes] = useState<Hero[]>(() =>
    heroMetas.map((meta: HeroMeta) => ({
      ...meta,
      active: meta.id === heroId,
    })),
  );
  const [isHeroChangeEnabled, setIsHeroChangeEnabled] = useState(false);
  const [isHeroHighlighted, setIsHeroHighlighted] = useState(false);
  const [isChangingHero, setIsChangingHero] = useState(false);
  const [isLeavingMenu, setIsLeavingMenu] = useState(false);
  const initialHeroIndex = heroMetas.findIndex((meta) => meta.id === heroId);
  const [activeHeroIndex, setActiveHeroIndex] = useState(() => initialHeroIndex);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(() => initialHeroIndex);

  useEffect(() => {
    if (heroes.length === 0) {
      return;
    }

    setActiveHeroIndex(heroes.findIndex((hero) => hero.active));
  }, [heroes]);

  const setActiveHero = useCallback(
    (id: HeroId) => {
      if (isChangingHero || isHeroHighlighted) {
        return;
      }

      setHeroes((prevHeroes) =>
        prevHeroes.map((hero) => ({
          ...hero,
          active: id === hero.id,
        })),
      );
    },
    [isChangingHero, isHeroHighlighted],
  );

  const setActivePrevHero = useCallback(() => {
    if (isChangingHero || isHeroHighlighted || !isHeroChangeEnabled) {
      return;
    }

    const prevActiveHeroId =
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[LAST_HERO_INDEX].id;

    setActiveHero(prevActiveHeroId as HeroId);
  }, [
    activeHeroIndex,
    heroes,
    isChangingHero,
    isHeroChangeEnabled,
    isHeroHighlighted,
    setActiveHero,
  ]);

  const setActiveNextHero = useCallback(() => {
    if (isChangingHero || isHeroHighlighted || !isHeroChangeEnabled) {
      return;
    }

    const nextActiveHeroId =
      activeHeroIndex < LAST_HERO_INDEX ? heroes[activeHeroIndex + 1].id : heroes[0].id;

    setActiveHero(nextActiveHeroId as HeroId);
  }, [
    activeHeroIndex,
    heroes,
    isChangingHero,
    isHeroChangeEnabled,
    isHeroHighlighted,
    setActiveHero,
  ]);

  const updatePrevActiveHeroIndex = useCallback(
    () => setPrevActiveHeroIndex(activeHeroIndex),
    [activeHeroIndex],
  );

  const enableHeroChange = () => setIsHeroChangeEnabled(true);
  const disableHeroChange = () => setIsHeroChangeEnabled(false);
  const highlightHero = () => setIsHeroHighlighted(true);
  const dimHero = () => setIsHeroHighlighted(false);
  const initChangeHero = () => setIsChangingHero(true);
  const endChangeHero = () => setIsChangingHero(false);
  const leaveMenu = () => setIsLeavingMenu(true);

  return {
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
  };
};

export default useHeroMenu;
