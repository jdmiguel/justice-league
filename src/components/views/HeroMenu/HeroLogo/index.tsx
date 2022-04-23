import { useRef, useMemo, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { ease } from '@/helpers/theme';
import { HeroMenuData as Hero } from '@/helpers/types';
import SupermanLogo from '@/components/views/HeroMenu/HeroLogo/SupermanLogo';
import BatmanLogo from '@/components/views/HeroMenu/HeroLogo/BatmanLogo';
import WonderWomanLogo from '@/components/views/HeroMenu/HeroLogo/WonderWomanLogo';
import FlashLogo from '@/components/views/HeroMenu/HeroLogo/FlashLogo';
import GreenLanternLogo from '@/components/views/HeroMenu/HeroLogo/GreenLanternLogo';
import GreenArrowLogo from '@/components/views/HeroMenu/HeroLogo/GreenArrowLogo';
import AquamanLogo from '@/components/views/HeroMenu/HeroLogo/AquamanLogo';
import CyborgLogo from '@/components/views/HeroMenu/HeroLogo/CyborgLogo';

export const StyledHeroLogo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

type Props = {
  heroes: Hero[];
  isHighlighted: boolean;
};

const HeroLogo: React.FC<Props> = ({ heroes, isHighlighted }) => {
  const initTweenRef = useRef<GSAPTween>();
  const enterTweenRef = useRef<GSAPTween>();
  const leaveTweenRef = useRef<GSAPTween>();
  const supermanRef = useRef<HTMLDivElement>(null);
  const batmanRef = useRef<HTMLDivElement>(null);
  const wonderwomanRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const greenlanternRef = useRef<HTMLDivElement>(null);
  const aquamanRef = useRef<HTMLDivElement>(null);
  const greenarrowRef = useRef<HTMLDivElement>(null);
  const cyborgRef = useRef<HTMLDivElement>(null);

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [prevActiveHeroIndex, setPrevActiveHeroIndex] = useState(0);

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
    if (!heroRefs.every((heroRef) => heroRef)) {
      return;
    }

    initTweenRef.current = gsap
      .fromTo(
        heroRefs[0].current,
        {
          opacity: 0,
          rotation: -90,
          scale: 1.5,
        },
        {
          duration: 0.5,
          opacity: 1,
          rotation: 0,
          scale: 1,
          ease: ease.smooth,
        },
      )
      .startTime(5);

    return () => {
      initTweenRef.current?.kill();
    };
  }, [heroRefs]);

  useEffect(() => {
    if (prevActiveHeroIndex === activeHeroIndex) {
      return;
    }

    const preActiveLogo = heroRefs[prevActiveHeroIndex].current;
    const rotationDeactiveHero = activeHeroIndex > prevActiveHeroIndex ? 90 : -90;
    leaveTweenRef.current = gsap.fromTo(
      preActiveLogo,
      {
        opacity: 1,
        rotation: 0,
      },
      {
        duration: 0.5,
        opacity: 0,
        rotation: rotationDeactiveHero,
        scale: 1.5,
        ease: ease.smooth,
      },
    );

    const activeLogo = heroRefs[activeHeroIndex].current;
    const rotationActiveHero = activeHeroIndex > prevActiveHeroIndex ? -90 : 90;
    enterTweenRef.current = gsap.fromTo(
      activeLogo,
      {
        opacity: 0,
        rotation: rotationActiveHero,
        scale: 1.5,
      },
      {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: ease.smooth,
      },
    );

    enterTweenRef.current.then(() => {
      setPrevActiveHeroIndex(activeHeroIndex);
    });

    return () => {
      enterTweenRef.current?.kill();
      leaveTweenRef.current?.kill();
    };
  }, [prevActiveHeroIndex, activeHeroIndex, heroRefs]);

  useEffect(() => {
    setActiveHeroIndex(heroes.findIndex((hero) => hero.active));
  }, [heroes]);

  const getLogo = (id: string) => {
    switch (id) {
      case 'superman':
      default:
        return <SupermanLogo isHighlighted={isHighlighted} />;
      case 'batman':
        return <BatmanLogo isHighlighted={isHighlighted} />;
      case 'wonderwoman':
        return <WonderWomanLogo isHighlighted={isHighlighted} />;
      case 'flash':
        return <FlashLogo isHighlighted={isHighlighted} />;
      case 'greenlantern':
        return <GreenLanternLogo isHighlighted={isHighlighted} />;
      case 'greenarrow':
        return <GreenArrowLogo isHighlighted={isHighlighted} />;
      case 'aquaman':
        return <AquamanLogo isHighlighted={isHighlighted} />;
      case 'cyborg':
        return <CyborgLogo isHighlighted={isHighlighted} />;
    }
  };

  return (
    <>
      {heroes.map((hero, index) => (
        <StyledHeroLogo key={hero.id} ref={heroRefs[index]}>
          {getLogo(hero.id)}
        </StyledHeroLogo>
      ))}
    </>
  );
};

export default HeroLogo;
