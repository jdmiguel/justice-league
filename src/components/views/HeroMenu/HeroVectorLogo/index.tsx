import { useRef, useMemo, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { HeroMenuData as Hero } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import SupermanLogo from '@/components/views/HeroMenu/HeroVectorLogo/SupermanLogo';
import BatmanLogo from '@/components/views/HeroMenu/HeroVectorLogo/BatmanLogo';
import WonderWomanLogo from '@/components/views/HeroMenu/HeroVectorLogo/WonderWomanLogo';
import FlashLogo from '@/components/views/HeroMenu/HeroVectorLogo/FlashLogo';
import GreenLanternLogo from '@/components/views/HeroMenu/HeroVectorLogo/GreenLanternLogo';
import AquamanLogo from '@/components/views/HeroMenu/HeroVectorLogo/AquamanLogo';
import CyborgLogo from '@/components/views/HeroMenu/HeroVectorLogo/CyborgLogo';
import { StyledHeroVectorLogo } from '@/components/views/HeroMenu/styles';

type Props = {
  heroes: Hero[];
  activeHeroIndex: number;
  prevActiveHeroIndex: number;
  lastHeroIndex: number;
  isHighlighted: boolean;
  isFaded: boolean;
};

const HeroVectorLogo: React.FC<Props> = ({
  heroes,
  activeHeroIndex,
  prevActiveHeroIndex,
  lastHeroIndex,
  isHighlighted,
  isFaded,
}) => {
  const tweenRef = useRef<GSAPTween>();
  const supermanRef = useRef<HTMLDivElement>(null);
  const batmanRef = useRef<HTMLDivElement>(null);
  const wonderwomanRef = useRef<HTMLDivElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const greenlanternRef = useRef<HTMLDivElement>(null);
  const aquamanRef = useRef<HTMLDivElement>(null);
  const cyborgRef = useRef<HTMLDivElement>(null);

  const heroRefs = useMemo(
    () => [
      supermanRef,
      batmanRef,
      wonderwomanRef,
      flashRef,
      greenlanternRef,
      aquamanRef,
      cyborgRef,
    ],
    [],
  );

  const { isIntroVisible } = useIntro();

  useEffect(() => {
    const tween = tweenRef.current;

    return () => {
      tween?.kill();
    };
  }, []);

  useEffect(() => {
    if (!heroRefs.every((heroRef) => heroRef)) {
      return;
    }

    if (isIntroVisible) {
      tweenRef.current = gsap
        .fromTo(
          heroRefs[activeHeroIndex].current,
          {
            opacity: 0,
            rotationY: 90,
          },
          {
            duration: 0.75,
            opacity: 1,
            rotationY: 0,
            ease: ease.smooth,
          },
        )
        .startTime(4.5);

      return;
    }

    tweenRef.current = gsap.fromTo(
      heroRefs[activeHeroIndex].current,
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        duration: 0.75,
        opacity: 1,
        scale: 1,
        ease: ease.smooth,
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroRefs]);

  useEffect(() => {
    if (prevActiveHeroIndex === activeHeroIndex) {
      return;
    }

    const isNextHeroDirection =
      (activeHeroIndex > prevActiveHeroIndex &&
        !(activeHeroIndex === lastHeroIndex && prevActiveHeroIndex === 0)) ||
      (activeHeroIndex === 0 && prevActiveHeroIndex === lastHeroIndex);

    const preActiveLogo = heroRefs[prevActiveHeroIndex].current;
    tweenRef.current = gsap.fromTo(
      preActiveLogo,
      {
        opacity: 1,
        rotation: 0,
      },
      {
        duration: 0.75,
        opacity: 0,
        rotation: isNextHeroDirection ? 90 : -90,
        scale: 1.5,
        ease: ease.smooth,
      },
    );

    const activeLogo = heroRefs[activeHeroIndex].current;
    tweenRef.current = gsap.fromTo(
      activeLogo,
      {
        opacity: 0,
        rotation: isNextHeroDirection ? -90 : 90,
        scale: 1.5,
      },
      {
        duration: 0.75,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: ease.smooth,
      },
    );
  }, [prevActiveHeroIndex, activeHeroIndex, lastHeroIndex, heroRefs]);

  const getLogo = (id: string) => {
    switch (id) {
      case 'superman':
      default:
        return <SupermanLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'batman':
        return <BatmanLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'wonderwoman':
        return <WonderWomanLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'flash':
        return <FlashLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'greenlantern':
        return <GreenLanternLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'aquaman':
        return <AquamanLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
      case 'cyborg':
        return <CyborgLogo isHighlighted={isHighlighted} isFaded={isFaded} />;
    }
  };

  return (
    <>
      {heroes.map((hero, index) => (
        <StyledHeroVectorLogo key={hero.heroId} ref={heroRefs[index]}>
          {getLogo(hero.heroId)}
        </StyledHeroVectorLogo>
      ))}
    </>
  );
};

export default HeroVectorLogo;
