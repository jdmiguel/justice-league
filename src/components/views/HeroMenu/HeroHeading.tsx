import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { debounce, splitHeadingIntoChars } from '@/helpers';
import { HeroMenuData as Hero } from '@/helpers/types';

const posX = gsap.utils.wrap([-15, -10, -7, -5, 0, 5, 7, 10, 15, 22, 30, 40]);

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

export const StyledHeroHeadingItem = styled.li<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  position: absolute;
`;

export const StyledHeroHeadingItemButton = styled.button<{ isActive: boolean }>``;

type Props = {
  heroes: Hero[];
};

const HeroHeading: React.FC<Props> = ({ heroes }) => {
  const [withSplittedHeadings, setWithSplittedHeadings] = useState(false);

  const tlRef = useRef<GSAPTimeline>();
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

    tlRef.current = gsap.timeline();

    tlRef.current.startTime(5).fromTo(
      charsRef.current[0],
      {
        opacity: 0,
        rotationY: -120,
        scaleX: 0,
      },
      {
        duration: 0.7,
        opacity: 1,
        rotationY: 0,
        scaleX: 1,
        ease: 'power1.out',
        stagger: 0.05,
      },
    );

    return () => {
      tlRef.current?.kill();
    };
  }, [withSplittedHeadings]);

  const moveChars = (action: 'distance' | 'join') => {
    if (!tlRef.current) {
      return;
    }

    const findActiveHeroIndex = () => heroes.findIndex((hero) => hero.active);
    const activeHeroChars = charsRef.current[findActiveHeroIndex()];

    tlRef.current.to(activeHeroChars, {
      duration: 1,
      x: action === 'distance' ? posX : 0,
      ease: 'power1.out',
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedMoveChars = useCallback(debounce(moveChars, 100), [heroes]);

  return (
    <StyledHeroHeading>
      <StyledHeroHeadingList>
        {heroes.map((hero, index) => (
          <StyledHeroHeadingItem key={hero.id} isActive={hero.active}>
            <StyledHeroHeadingItemButton
              isActive={hero.active}
              onClick={() => {}}
              onMouseEnter={() => debouncedMoveChars('distance')}
              onMouseLeave={() => debouncedMoveChars('join')}
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
