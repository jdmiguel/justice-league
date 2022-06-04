import { ReactNode, createContext, useState, useContext } from 'react';
import { defaultHeroId } from '@/helpers';

const HeroContext = createContext({
  hero: '',
  updateHero: (_: string) => {},
});

type Props = {
  children: ReactNode;
};

const HeroContextProvider = ({ children }: Props) => {
  const [hero, setHero] = useState(defaultHeroId);

  const updateHero = (currentHeroId: string) => {
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
