import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroId, PageId } from '@/helpers/types';

const useHeroNavigation = () => {
  const [isNavigating, setIsNavigating] = useState(false);
  const nextPagePath = useRef('');

  const navigate = useNavigate();

  const initNavigation = ({ heroId, pageId }: { heroId: HeroId | null; pageId: PageId }) => {
    setIsNavigating(true);
    nextPagePath.current = pageId === 'root' ? '/' : `/${heroId}/${pageId}`;
  };

  const endNavigation = () => {
    setIsNavigating(false);
    navigate(nextPagePath.current);
  };

  return {
    nextPagePath: nextPagePath.current,
    isNavigating,
    initNavigation,
    endNavigation,
  };
};

export default useHeroNavigation;
