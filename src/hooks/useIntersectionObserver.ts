// @flow
import { useEffect, useState } from 'react';

type IntersectionObserverInit = {
  threshold: number;
  root: Element | null;
  rootMargin: string;
  freezeOnceVisible: boolean;
};

type ObservedElementRef = {
  current: HTMLElement | null;
};

/**
 * Hook that returns if a given element is visible within a container. It relies on the Intersection Observer API
 *
 * @param {ElementRef} ref ref to element that will be observed
 * @param {Intersection observer options} object customizable intersection observer options
 * @returns {entry}
 */

const useIntersectionObserver = (
  elementRef: ObservedElementRef,
  intersectionObserverOptions: IntersectionObserverInit = {
    threshold: 0.5,
    root: null,
    rootMargin: '-20%',
    freezeOnceVisible: true,
  },
): IntersectionObserverEntry | null => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const updateEntry = ([currentEntry]: IntersectionObserverEntry[]): void => {
    setEntry(currentEntry);
  };

  const { threshold, root, rootMargin, freezeOnceVisible } = intersectionObserverOptions;
  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;
    const node = elementRef?.current;

    if (!hasIOSupport || !node || frozen) {
      return;
    }

    const observer = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen]);

  return entry;
};

export default useIntersectionObserver;
