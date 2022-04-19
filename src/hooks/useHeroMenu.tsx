import { useMemo, useState } from 'react';
import heroesData from '@/assets/heroes.json';
import { HeroMenuData as Hero } from '@/helpers/types';

const useHeroMenu = () => {
  const fetchedHeroes: Hero[] = useMemo(
    () =>
      heroesData.map((hero, index) => ({
        id: hero.id,
        name: hero.name,
        bgPath: hero.bgPath,
        logoPath: hero.logoPath,
        iconWidth: hero.iconSize.width,
        iconHeight: hero.iconSize.height,
        active: index === 0,
      })),
    [],
  );

  const [heroes, setHeroes] = useState(fetchedHeroes);

  const lastHeroIndex = heroesData.length - 1;

  const setActiveHero = (id: string) => {
    setHeroes((prevHeroes) =>
      prevHeroes.map((hero) => ({
        ...hero,
        active: id === hero.id,
      })),
    );
  };

  const getActiveHero = () => heroes.findIndex((hero) => hero.active);

  const setActivePrevHero = () => {
    const activeHeroIndex = getActiveHero();
    const prevActiveHeroId =
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[lastHeroIndex].id;

    setActiveHero(prevActiveHeroId);
  };

  const setActiveNextHero = () => {
    const activeHeroIndex = getActiveHero();
    const nextActiveHeroId =
      activeHeroIndex < lastHeroIndex ? heroes[activeHeroIndex + 1].id : heroes[0].id;

    setActiveHero(nextActiveHeroId);
  };

  return {
    heroes,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
  };
};

export default useHeroMenu;
