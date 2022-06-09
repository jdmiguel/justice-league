import { useState } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

type ReturnType = {
  locked: boolean;
  updateLocked: (_: boolean) => void;
};

const useLockedBody = (): ReturnType => {
  const [locked, setLocked] = useState(true);

  // Do the side effect before render
  useIsomorphicLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    // Lock body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);

  const updateLocked = (currentLocked: boolean) => setLocked(currentLocked);

  return { locked, updateLocked };
};

export default useLockedBody;
