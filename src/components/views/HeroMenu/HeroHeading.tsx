import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { debounce, splitHeadingIntoChars } from '@/helpers';
import { HeroMenuData as Hero } from '@/helpers/types';

const cycles = {
  distanceX: gsap.utils.wrap([-15, -10, -7, -5, 0, 5, 7, 10, 15, 22, 30, 40]),
  leftX: gsap.utils.wrap([-320, -280, -240, -210, -170, -135, -115, -90, -70, -50, -35, -20]),
  rightX: gsap.utils.wrap([20, 35, 50, 70, 90, 115, 135, 170, 210, 240, 280, 320]),
};

export const StyledHeroHeading = styled.nav`
  font-size: 6.5rem;
  font-weight: 700;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 4;
  @media only screen and (min-width: 1200px) {
    font-size: 7.2rem;
  }
  @media only screen and (min-width: 1650px) {
    font-size: 8.5rem;
  }
`;

export const StyledHeroHeadingList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const StyledHeroHeadingItem = styled.li`
  visibility: hidden;
  position: absolute;
`;

export const StyledHeroHeadingItemButton = styled.button<{ isActive: boolean }>``;

type Props = {
  heroes: Hero[];
  onShrinkChars: () => void;
  onDistanceChars: () => void;
};

const HeroHeading: React.FC<Props> = ({ heroes, onShrinkChars, onDistanceChars }) => {
  const [withSplittedHeadings, setWithSplittedHeadings] = useState(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(0);

  const initTweenRef = useRef<GSAPTween>();
  const moveTweenRef = useRef<GSAPTween>();
  const enterTweenRef = useRef<GSAPTween>();
  const leaveTweenRef = useRef<GSAPTween>();
  const charsRef = useRef<any>([]);
  const supermanRef = useRef<HTMLHeadingElement>(null);
  const batmanRef = useRef<HTMLHeadingElement>(null);
  const wonderwomanRef = useRef<HTMLHeadingElement>(null);
  const flashRef = useRef<HTMLHeadingElement>(null);
  const greenlanternRef = useRef<HTMLHeadingElement>(null);
  const aquamanRef = useRef<HTMLHeadingElement>(null);
  const greenarrowRef = useRef<HTMLHeadingElement>(null);
  const cyborgRef = useRef<HTMLHeadingElement>(null);

  const heroRefs = useMemo(
    () => [
      supermanRef,
      batmanRef,
      wonderwomanRef,
      flashRef,
      greenlanternRef,
      aquamanRef,
      greenarrowRef,
      cyborgRef,
    ],
    [],
  );

  useEffect(() => {
    const tweens = [
      initTweenRef.current,
      moveTweenRef.current,
      leaveTweenRef.current,
      enterTweenRef.current,
    ];

    return () => {
      tweens[0]?.kill();
      tweens[1]?.kill();
      tweens[2]?.kill();
      tweens[3]?.kill();
    };
  }, []);

  useEffect(() => {
    if (!heroRefs.every((heroRef) => heroRef) || charsRef.current.length > 0) {
      return;
    }

    charsRef.current = heroRefs.map((ref) => splitHeadingIntoChars(ref.current));
    setWithSplittedHeadings(true);
  }, [heroRefs]);

  useEffect(() => {
    if (!withSplittedHeadings) {
      return;
    }

    initTweenRef.current = gsap
      .fromTo(
        charsRef.current[0],
        {
          opacity: 0,
          rotationY: -120,
          scaleX: 0,
          visibility: 'visible',
        },
        {
          duration: 0.7,
          opacity: 1,
          rotationY: 0,
          scaleX: 1,
          ease: 'power1.out',
          stagger: 0.05,
        },
      )
      .startTime(0.5);
  }, [withSplittedHeadings]);

  const leaveHeading = useCallback(() => {
    if (activeHeroIndex === prevActiveHeroIndex) {
      return;
    }

    const prevActiveHeroChars = charsRef.current[prevActiveHeroIndex];
    const posX = activeHeroIndex > prevActiveHeroIndex ? cycles.rightX : cycles.leftX;
    leaveTweenRef.current = gsap.fromTo(
      prevActiveHeroChars,
      {
        opacity: 1,
        x: 0,
      },
      {
        duration: 0.5,
        opacity: 0,
        x: posX,
        ease: 'power1.out',
        stagger: 0.02,
      },
    );

    leaveTweenRef.current.then(() => {
      gsap.set(prevActiveHeroChars, { visibility: 'hidden' });
      setPrevActiveHeroIndex(activeHeroIndex);
    });
  }, [activeHeroIndex, prevActiveHeroIndex]);

  const enterHeading = useCallback(() => {
    if (activeHeroIndex === prevActiveHeroIndex) {
      return;
    }

    const activeHeroChars = charsRef.current[activeHeroIndex];
    const posX = activeHeroIndex > prevActiveHeroIndex ? cycles.leftX : cycles.rightX;
    enterTweenRef.current = gsap.fromTo(
      activeHeroChars,
      {
        opacity: 0,
        visibility: 'hidden',
        x: posX,
      },
      {
        duration: 0.6,
        opacity: 1,
        visibility: 'visible',
        x: 0,
        ease: 'power1.inOut',
        stagger: 0.02,
      },
    );
  }, [activeHeroIndex, prevActiveHeroIndex]);

  useEffect(() => {
    setActiveHeroIndex(heroes.findIndex((hero) => hero.active));
  }, [heroes]);

  useEffect(() => {
    leaveHeading();
    enterHeading();
  }, [enterHeading, leaveHeading]);

  const distanceChars = () => {
    onDistanceChars();

    const activeHeroChars = charsRef.current[activeHeroIndex];
    moveTweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      x: cycles.distanceX,
      ease: 'power1.out',
    });
  };

  const shrinkChars = () => {
    onShrinkChars();

    const activeHeroChars = charsRef.current[activeHeroIndex];
    moveTweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      x: 0,
      ease: 'power1.out',
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedDistanceChars = useCallback(debounce(distanceChars, 100), [activeHeroIndex]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedShrinkChars = useCallback(debounce(shrinkChars, 100), [activeHeroIndex]);

  return (
    <StyledHeroHeading>
      <StyledHeroHeadingList>
        {heroes.map((hero, index) => (
          <StyledHeroHeadingItem key={hero.id}>
            <StyledHeroHeadingItemButton
              isActive={hero.active}
              onClick={() => {}}
              onMouseEnter={debouncedDistanceChars}
              onMouseLeave={debouncedShrinkChars}
            >
              <h2 ref={heroRefs[index]}>{hero.name}</h2>
            </StyledHeroHeadingItemButton>
          </StyledHeroHeadingItem>
        ))}
      </StyledHeroHeadingList>
    </StyledHeroHeading>
  );
};

export default HeroHeading;
