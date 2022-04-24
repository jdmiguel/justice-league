import { useMemo, useState, useContext } from 'react';
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
        bgPath: hero.bgPath,
        logoPath: hero.logoPath,
        active: index === 0,
      })),
    [],
  );

  const [heroes, setHeroes] = useState(fetchedHeroes);
  const [isHeroHighlighted, setIsHeroHighlighted] = useState(false);
  const [isChangingHero, setIsChangingHero] = useState(false);
  const [isLeavingMenu, setIsLeavingMenu] = useState(false);

  const navigate = useNavigate();

  const setActiveHero = (id: string) => {
    setHeroes((prevHeroes) =>
      prevHeroes.map((hero) => ({
        ...hero,
        active: id === hero.id,
      })),
    );
  };

  const getActiveHeroIndex = () => heroes.findIndex((hero) => hero.active);

  const setActivePrevHero = () => {
    if (isChangingHero || isHeroHighlighted) {
      return;
    }

    const activeHeroIndex = getActiveHeroIndex();
    const prevActiveHeroId =
      activeHeroIndex > 0 ? heroes[activeHeroIndex - 1].id : heroes[lastHeroIndex].id;

    setActiveHero(prevActiveHeroId);
  };

  const setActiveNextHero = () => {
    if (isChangingHero || isHeroHighlighted) {
      return;
    }

    const activeHeroIndex = getActiveHeroIndex();
    const nextActiveHeroId =
      activeHeroIndex < lastHeroIndex ? heroes[activeHeroIndex + 1].id : heroes[0].id;

    setActiveHero(nextActiveHeroId);
  };

  const onInitChangeHero = () => setIsChangingHero(true);
  const onEndChangeHero = () => setIsChangingHero(false);

  const onInitHighlightHero = () => setIsHeroHighlighted(true);
  const onEndHighlightHero = () => setIsHeroHighlighted(false);

  const onInitLeaveMenu = () => setIsLeavingMenu(true);
  const onEndLeaveMenu = () => {
    const activeHeroIndex = getActiveHeroIndex();
    const activeHeroId = heroes[activeHeroIndex].id;

    setIsLeavingMenu(false);
    navigate(`/${activeHeroId}`);
  };

  return {
    heroes,
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
