import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { debounce, splitHeadingIntoChars } from '@/helpers';
import { HeroMenuData } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import {
  StyledHeroHeading,
  StyledHeroHeadingList,
  StyledHeroHeadingListItem,
  StyledHeroHeadingListItemButton,
} from '@/components/views/HeroMenu/styles';

const cycles = {
  distanceX: gsap.utils.wrap([-15, -10, -7, -5, 0, 5, 7, 10, 15, 22, 30, 40]),
  duplicatedDistanceX: gsap.utils.wrap([-60, -40, -30, -20, 0, 20, 30, 40, 60, 80, 120, 160]),
  leftX: gsap.utils.wrap([-320, -280, -240, -210, -170, -135, -115, -90, -70, -50, -35, -20]),
  rightX: gsap.utils.wrap([20, 35, 50, 70, 90, 115, 135, 170, 210, 240, 280, 320]),
};

type Props = {
  heroes: HeroMenuData[];
  activeHeroIndex: number;
  prevActiveHeroIndex: number;
  lastHeroIndex: number;
  onDistanceChars: () => void;
  onInitShrinkChars: () => void;
  onEndShrinkChars: () => void;
  onInitChange: () => void;
  onEndChange: () => void;
  onUpdatePrevActiveHeroIndex: () => void;
  onLeave: () => void;
  onClick: () => void;
};

const HeroHeading: React.FC<Props> = ({
  heroes,
  activeHeroIndex,
  prevActiveHeroIndex,
  lastHeroIndex,
  onDistanceChars,
  onInitShrinkChars,
  onEndShrinkChars,
  onInitChange,
  onEndChange,
  onUpdatePrevActiveHeroIndex,
  onLeave,
  onClick,
}) => {
  const [withSplittedHeadings, setWithSplittedHeadings] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const tweenRef = useRef<GSAPTween>();
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

  const { isDisplayed: isIntroDisplayed } = useIntro();

  const isNextHeroDirection =
    (activeHeroIndex > prevActiveHeroIndex &&
      !(activeHeroIndex === lastHeroIndex && prevActiveHeroIndex === 0)) ||
    (activeHeroIndex === 0 && prevActiveHeroIndex === lastHeroIndex);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
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

    if (isIntroDisplayed) {
      tweenRef.current = gsap
        .fromTo(
          charsRef.current[activeHeroIndex],
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
        .startTime(5);

      return;
    }

    setIsFading(true);

    tweenRef.current = gsap.fromTo(
      charsRef.current[activeHeroIndex],
      {
        opacity: 0,
        x: cycles.duplicatedDistanceX,
        visibility: 'visible',
      },
      {
        duration: 0.8,
        opacity: 1,
        x: 0,
        ease: 'power1.out',
      },
    );
    tweenRef.current.then(() => setIsFading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withSplittedHeadings]);

  const leaveHeading = useCallback(() => {
    if (activeHeroIndex === prevActiveHeroIndex) {
      return;
    }

    onInitChange();
    setIsChanging(true);

    const prevActiveHeroChars = charsRef.current[prevActiveHeroIndex];
    tweenRef.current = gsap.fromTo(
      prevActiveHeroChars,
      {
        opacity: 1,
        x: 0,
      },
      {
        duration: 0.5,
        opacity: 0,
        x: isNextHeroDirection ? cycles.rightX : cycles.leftX,
        ease: 'power1.out',
        stagger: 0.02,
      },
    );

    tweenRef.current.then(() => {
      gsap.set(prevActiveHeroChars, { visibility: 'hidden' });
    });
  }, [activeHeroIndex, prevActiveHeroIndex, onInitChange, isNextHeroDirection]);

  const enterHeading = useCallback(() => {
    if (activeHeroIndex === prevActiveHeroIndex) {
      return;
    }

    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.fromTo(
      activeHeroChars,
      {
        opacity: 0,
        visibility: 'hidden',
        x: isNextHeroDirection ? cycles.leftX : cycles.rightX,
      },
      {
        duration: 0.6,
        delay: 0.25,
        opacity: 1,
        visibility: 'visible',
        x: 0,
        ease: 'power1.inOut',
        stagger: 0.02,
      },
    );

    tweenRef.current.then(() => {
      setIsChanging(false);
      onEndChange();
      onUpdatePrevActiveHeroIndex();
    });
  }, [
    activeHeroIndex,
    prevActiveHeroIndex,
    isNextHeroDirection,
    onEndChange,
    onUpdatePrevActiveHeroIndex,
  ]);

  useEffect(() => {
    leaveHeading();
    enterHeading();
  }, [enterHeading, leaveHeading]);

  const distanceChars = ({ isLeavingMenu = false }: { isLeavingMenu: boolean }) => {
    if (isFading) {
      return;
    }

    onDistanceChars();

    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      opacity: isLeavingMenu ? 0 : 1,
      x: isLeavingMenu ? cycles.duplicatedDistanceX : cycles.distanceX,
      ease: 'power1.out',
    });

    tweenRef.current.then(() => {
      if (!isLeavingMenu) {
        return;
      }

      onLeave();
    });
  };

  const shrinkChars = () => {
    if (isFading) {
      return;
    }

    onInitShrinkChars();

    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      x: 0,
      ease: 'power1.out',
    });

    tweenRef.current.then(() => {
      onEndShrinkChars();
    });
  };

  const clickHeading = () => {
    setIsFading(true);
    distanceChars({ isLeavingMenu: true });
    onClick();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedDistanceChars = useCallback(debounce(distanceChars, 100), [
    activeHeroIndex,
    isFading,
  ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedShrinkChars = useCallback(debounce(shrinkChars, 100), [activeHeroIndex, isFading]);

  return (
    <StyledHeroHeading>
      <StyledHeroHeadingList>
        {heroes.map((hero, index) => (
          <StyledHeroHeadingListItem key={hero.id}>
            <StyledHeroHeadingListItemButton
              onClick={clickHeading}
              onMouseEnter={debouncedDistanceChars}
              onMouseLeave={debouncedShrinkChars}
              isChanging={isChanging}
            >
              <h2 ref={heroRefs[index]}>{hero.name}</h2>
            </StyledHeroHeadingListItemButton>
          </StyledHeroHeadingListItem>
        ))}
      </StyledHeroHeadingList>
    </StyledHeroHeading>
  );
};

export default HeroHeading;
