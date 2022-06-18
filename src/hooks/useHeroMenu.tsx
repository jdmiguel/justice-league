import { useState, useEffect, useCallback } from 'react';
import heroesData from '@/assets/heroes.json';
import { HeroId, HeroMenuData as Hero } from '@/helpers/types';

const lastHeroIndex = heroesData.length - 1;

const useHeroMenu = (heroId: HeroId) => {
  const fetchedHeroes: Hero[] = heroesData.map((hero) => ({
    id: hero.id as HeroId,
    name: hero.name,
    active: hero.id === heroId,
  }));

  const defaultActiveHeroIndex = fetchedHeroes.findIndex((hero) => hero.active);

  const [heroes, setHeroes] = useState(fetchedHeroes);
  const [isHeroChangeEnabled, setIsHeroChangeEnabled] = useState(false);
  const [isHeroHighlighted, setIsHeroHighlighted] = useState(false);
  const [isChangingHero, setIsChangingHero] = useState(false);
  const [isLeavingMenu, setIsLeavingMenu] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(defaultActiveHeroIndex);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(defaultActiveHeroIndex);

  useEffect(() => {
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
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[lastHeroIndex].id;

    setActiveHero(prevActiveHeroId);
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
      activeHeroIndex < lastHeroIndex ? heroes[activeHeroIndex + 1].id : heroes[0].id;

    setActiveHero(nextActiveHeroId);
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
    lastHeroIndex,
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
