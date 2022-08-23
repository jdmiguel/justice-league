import { ReactNode, createContext, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_ACTIVE_HERO_ID, DEFAULT_ACTIVE_PAGE_ID } from '@/helpers';
import { HeroId, PageId } from '@/helpers/types';

const CustomNavigationContext = createContext({
  activeHeroId: DEFAULT_ACTIVE_HERO_ID,
  activePageId: DEFAULT_ACTIVE_PAGE_ID,
  updateActiveHeroId: (_: HeroId) => {},
  updateActivePageId: (_: PageId) => {},
  isNavigating: false,
  nextPagePath: '',
  initNavigation: ({}: { heroId: HeroId; pageId: PageId }) => {},
  endNavigation: () => {},
});

type Props = {
  children: ReactNode;
};

const CustomNavigationContextProvider = ({ children }: Props) => {
  const [activeHeroId, setActiveHeroId] = useState<HeroId>(DEFAULT_ACTIVE_HERO_ID);
  const [activePageId, setActivePageId] = useState<PageId>(DEFAULT_ACTIVE_PAGE_ID);
  const [isNavigating, setIsNavigating] = useState(false);
  const nextPagePath = useRef('');

  const navigate = useNavigate();

  const updateActiveHeroId = (heroId: HeroId) => setActiveHeroId(heroId);
  const updateActivePageId = (pageId: PageId) => setActivePageId(pageId);

  const initNavigation = ({ heroId, pageId }: { heroId: HeroId; pageId: PageId }) => {
    setIsNavigating(true);
    updateActivePageId(pageId);
    nextPagePath.current = pageId === 'root' ? '/' : `${heroId}/${pageId}`;
  };

  const endNavigation = () => {
    setIsNavigating(false);
    navigate(nextPagePath.current);
  };

  const customNavigationContextValue = {
    activeHeroId,
    activePageId,
    updateActiveHeroId,
    updateActivePageId,
    isNavigating,
    nextPagePath: nextPagePath.current,
    initNavigation,
    endNavigation,
  };

  return (
    <CustomNavigationContext.Provider value={customNavigationContextValue}>
      {children}
    </CustomNavigationContext.Provider>
  );
};

const useCustomNavigation = () => useContext(CustomNavigationContext);

export { CustomNavigationContextProvider, useCustomNavigation };

export default CustomNavigationContext;
