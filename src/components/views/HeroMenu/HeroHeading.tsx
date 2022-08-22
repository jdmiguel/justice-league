import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { splitHeadingIntoChars, LAST_HERO_INDEX } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroMenuData } from '@/helpers/types';
import { useIntro } from '@/contexts/IntroContext';
import {
  StyledHeroHeading,
  StyledHeroHeadingList,
  StyledHeroHeadingListItem,
  StyledHeroHeadingListItemButton,
  StyledHeroHeadingListItemText,
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
  onUpdatePrevActiveHeroIndex: () => void;
  isHeroChangeEnabled: boolean;
  onEndIntroChars: () => void;
  onDistanceChars: ({ isLeaving }: { isLeaving: boolean }) => void;
  onInitShrinkChars: () => void;
  onEndShrinkChars: () => void;
  isChangingHero: boolean;
  onInitChange: () => void;
  onEndChange: () => void;
  isFadingChars: boolean;
  onLeave: () => void;
};

const HeroHeading: React.FC<Props> = ({
  heroes,
  activeHeroIndex,
  prevActiveHeroIndex,
  onUpdatePrevActiveHeroIndex,
  isHeroChangeEnabled,
  onEndIntroChars,
  onDistanceChars,
  onInitShrinkChars,
  onEndShrinkChars,
  isChangingHero,
  onInitChange,
  onEndChange,
  isFadingChars,
  onLeave,
}) => {
  const [withSplittedHeadings, setWithSplittedHeadings] = useState(false);

  const tweenRef = useRef<GSAPTween>();
  const charsRef = useRef<any>([]);
  const supermanRef = useRef<HTMLHeadingElement>(null);
  const batmanRef = useRef<HTMLHeadingElement>(null);
  const wonderwomanRef = useRef<HTMLHeadingElement>(null);
  const flashRef = useRef<HTMLHeadingElement>(null);
  const greenlanternRef = useRef<HTMLHeadingElement>(null);
  const aquamanRef = useRef<HTMLHeadingElement>(null);
  const cyborgRef = useRef<HTMLHeadingElement>(null);

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

  const isNextHeroDirection =
    (activeHeroIndex > prevActiveHeroIndex &&
      !(activeHeroIndex === LAST_HERO_INDEX && prevActiveHeroIndex === 0)) ||
    (activeHeroIndex === 0 && prevActiveHeroIndex === LAST_HERO_INDEX);

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!heroRefs.every((heroRef) => heroRef) || charsRef.current.length > 0) {
      return;
    }

    charsRef.current = heroRefs.map((heroRef) => splitHeadingIntoChars(heroRef.current));
    setWithSplittedHeadings(true);
  }, [heroRefs]);

  useEffect(() => {
    if (!withSplittedHeadings) {
      return;
    }

    if (isIntroVisible) {
      tweenRef.current = gsap
        .fromTo(
          charsRef.current[activeHeroIndex],
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
            ease: ease.smooth,
            stagger: 0.02,
          },
        )
        .startTime(4.5);
      tweenRef.current.then(onEndIntroChars);

      return;
    }

    tweenRef.current = gsap.fromTo(
      charsRef.current[activeHeroIndex],
      {
        opacity: 0,
        x: cycles.duplicatedDistanceX,
      },
      {
        duration: 0.75,
        opacity: 1,
        x: 0,
        ease: ease.smooth,
      },
    );
    tweenRef.current.then(onEndIntroChars);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withSplittedHeadings]);

  const leaveHeading = useCallback(() => {
    onInitChange();

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
        ease: ease.smooth,
        stagger: 0.015,
      },
    );
  }, [isNextHeroDirection, onInitChange, prevActiveHeroIndex]);

  const enterHeading = useCallback(() => {
    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.fromTo(
      activeHeroChars,
      {
        opacity: 0,
        x: isNextHeroDirection ? cycles.leftX : cycles.rightX,
      },
      {
        duration: 0.5,
        delay: 0.25,
        opacity: 1,
        x: 0,
        ease: 'power1.inOut',
        stagger: 0.015,
      },
    );

    tweenRef.current.then(() => {
      onEndChange();
      onUpdatePrevActiveHeroIndex();
    });
  }, [activeHeroIndex, isNextHeroDirection, onEndChange, onUpdatePrevActiveHeroIndex]);

  useEffect(() => {
    if (activeHeroIndex === prevActiveHeroIndex || isChangingHero || !isHeroChangeEnabled) {
      return;
    }

    leaveHeading();
    enterHeading();
  }, [
    activeHeroIndex,
    enterHeading,
    isChangingHero,
    isHeroChangeEnabled,
    leaveHeading,
    prevActiveHeroIndex,
  ]);

  const distanceChars = (
    { isLeavingMenu }: { isLeavingMenu: boolean } = { isLeavingMenu: false },
  ) => {
    onDistanceChars({ isLeaving: isLeavingMenu });

    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      opacity: isLeavingMenu ? 0 : 1,
      x: isLeavingMenu ? cycles.duplicatedDistanceX : cycles.distanceX,
      ease: ease.smooth,
    });

    tweenRef.current.then(() => {
      if (!isLeavingMenu) {
        return;
      }

      onLeave();
    });
  };

  const shrinkChars = () => {
    if (isFadingChars) {
      return;
    }

    onInitShrinkChars();

    const activeHeroChars = charsRef.current[activeHeroIndex];
    tweenRef.current = gsap.to(activeHeroChars, {
      duration: 1,
      x: 0,
      ease: ease.smooth,
    });

    tweenRef.current.then(onEndShrinkChars);
  };

  const onOverHeading = () => {
    if (!isHeroChangeEnabled || isChangingHero) {
      return;
    }

    distanceChars();
  };

  const clickHeading = () => distanceChars({ isLeavingMenu: true });

  return (
    <StyledHeroHeading>
      <StyledHeroHeadingList>
        {heroes.map((hero, index) => (
          <StyledHeroHeadingListItem key={hero.heroId}>
            <StyledHeroHeadingListItemButton
              onClick={clickHeading}
              onMouseOver={onOverHeading}
              onMouseOut={shrinkChars}
              isDisabled={!hero.active || isChangingHero}
            />
            <StyledHeroHeadingListItemText ref={heroRefs[index]}>
              {hero.name}
            </StyledHeroHeadingListItemText>
          </StyledHeroHeadingListItem>
        ))}
      </StyledHeroHeadingList>
    </StyledHeroHeading>
  );
};

export default HeroHeading;
