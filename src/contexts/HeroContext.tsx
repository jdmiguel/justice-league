import { ReactNode, createContext, useState, useContext } from 'react';
import { defaultHeroId } from '@/helpers';
import { HeroId } from '@/helpers/types';

const HeroContext = createContext({
  hero: defaultHeroId,
  updateHero: (_: HeroId) => {},
});

type Props = {
  children: ReactNode;
};

const HeroContextProvider = ({ children }: Props) => {
  const [hero, setHero] = useState<HeroId>(defaultHeroId);

  const updateHero = (currentHeroId: HeroId) => {
    setHero(currentHeroId);
  };

  const heroContextValue = {
    hero,
    updateHero,
  };

  return <HeroContext.Provider value={heroContextValue}>{children}</HeroContext.Provider>;
};

const useHero = () => useContext(HeroContext);

export { HeroContextProvider, useHero };

export default HeroContext;
