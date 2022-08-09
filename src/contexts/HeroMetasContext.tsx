import { ReactNode, createContext, useState, useEffect, useContext } from 'react';
import { HeroMeta } from '@/helpers/types';

const HeroMetasContext = createContext({
  isLoadingHeroMetas: true,
  heroMetas: [
    {
      heroId: '',
      name: '',
      menuBgImagePath: '',
      whiteLogoPath: '',
      colorLogoPath: '',
    },
  ],
});

type Props = {
  children: ReactNode;
};

const HeroMetasContextProvider = ({ children }: Props) => {
  const [isLoadingHeroMetas, setIsLoadingHeroMetas] = useState(true);
  const [heroMetas, setHeroMetas] = useState<HeroMeta[]>([]);

  useEffect(() => {
    const getMetas = async () => {
      try {
        const res = await fetch('/.netlify/functions/getMetas');
        const metas = await res.json();

        setIsLoadingHeroMetas(false);
        setHeroMetas(metas);
      } catch (err) {
        setIsLoadingHeroMetas(false);
        console.error(err);
      }
    };

    getMetas();
  }, []);

  const heroMetasContextValue = {
    isLoadingHeroMetas,
    heroMetas,
  };

  return (
    <HeroMetasContext.Provider value={heroMetasContextValue}>{children}</HeroMetasContext.Provider>
  );
};

const useHeroMeta = () => useContext(HeroMetasContext);

export { HeroMetasContextProvider, useHeroMeta };

export default HeroMetasContext;
