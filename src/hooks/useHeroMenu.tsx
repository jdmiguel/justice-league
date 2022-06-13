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
  const [isHeroHighlighted, setIsHeroHighlighted] = useState(false);
  const [isDefaultMenuAppearance, setIsDefaultMenuAppearance] = useState(true);
  const [isChangingHero, setIsChangingHero] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(defaultActiveHeroIndex);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(defaultActiveHeroIndex);

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
    if (isChangingHero || !isDefaultMenuAppearance) {
      return;
    }

    const prevActiveHeroId =
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[lastHeroIndex].id;

    setActiveHero(prevActiveHeroId);
  };

  const setActiveNextHero = () => {
    if (isChangingHero || !isDefaultMenuAppearance) {
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

  const initChangeHero = useCallback(() => setIsChangingHero(true), []);
  const endChangeHero = useCallback(() => setIsChangingHero(false), []);

  const highlightHero = () => {
    setIsHeroHighlighted(true);
    setIsDefaultMenuAppearance(false);
  };
  const dimHero = () => setIsHeroHighlighted(false);
  const resetMenuAppearance = () => setIsDefaultMenuAppearance(true);

  return {
    heroes,
    activeHeroIndex,
    prevActiveHeroIndex,
    lastHeroIndex,
    updatePrevActiveHeroIndex,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
    isChangingHero,
    initChangeHero,
    endChangeHero,
    isHeroHighlighted,
    highlightHero,
    dimHero,
    resetMenuAppearance,
  };
};

export default useHeroMenu;
