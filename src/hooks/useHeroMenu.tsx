import { useMemo, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import heroesData from '@/assets/heroes.json';
import { HeroMenuData as Hero } from '@/helpers/types';

const lastHeroIndex = heroesData.length - 1;

const useHeroMenu = () => {
  const fetchedHeroes: Hero[] = useMemo(
    () =>
      heroesData.map((hero, index) => ({
        id: hero.id,
        name: hero.name,
        active: index === 0,
      })),
    [],
  );

  const [heroes, setHeroes] = useState(fetchedHeroes);
  const [isLeavingMenu, setIsLeavingMenu] = useState(false);
  const [isHeroHighlighted, setIsHeroHighlighted] = useState(false);
  const [isChangingHero, setIsChangingHero] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setActiveHeroIndex(heroes.findIndex((hero) => hero.active));
  }, [heroes]);

  const setActiveHero = (id: string) => {
    setHeroes((prevHeroes) =>
      prevHeroes.map((hero) => ({
        ...hero,
        active: id === hero.id,
      })),
    );
  };

  const setActivePrevHero = () => {
    if (isChangingHero || isHeroHighlighted) {
      return;
    }

    const prevActiveHeroId =
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[lastHeroIndex].id;

    setActiveHero(prevActiveHeroId);
  };

  const setActiveNextHero = () => {
    if (isChangingHero || isHeroHighlighted) {
      return;
    }

    const nextActiveHeroId =
      activeHeroIndex < lastHeroIndex ? heroes[activeHeroIndex + 1].id : heroes[0].id;

    setActiveHero(nextActiveHeroId);
  };

  const updatePrevActiveHeroIndex = useCallback(
    () => setPrevActiveHeroIndex(activeHeroIndex),
    [activeHeroIndex],
  );

  const onInitChangeHero = useCallback(() => setIsChangingHero(true), []);
  const onEndChangeHero = useCallback(() => setIsChangingHero(false), []);

  const onInitHighlightHero = () => setIsHeroHighlighted(true);
  const onEndHighlightHero = () => setIsHeroHighlighted(false);

  const onInitLeaveMenu = () => setIsLeavingMenu(true);
  const onEndLeaveMenu = () => {
    const activeHeroId = heroes[activeHeroIndex].id;

    setIsLeavingMenu(false);
    navigate(`/${activeHeroId}`);
  };

  return {
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
  };
};

export default useHeroMenu;
