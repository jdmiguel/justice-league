import { useRef, useEffect, useContext, useCallback } from 'react';
import { gsap } from 'gsap';
import { getHero } from '@/helpers';
import { heroColors, getRandomHeroColor, theme } from '@/helpers/theme';
import IntroContext from '@/contexts/IntroContext';
import Logo from '@/components/views/Intro/Logo';
import Chars from '@/components/views/Intro/Chars';
import { StyledIntro } from '@/components/views/Intro/styles';

type Props = {
  idParam?: string;
};

const Intro: React.FC<Props> = ({ idParam }) => {
  const tweenRef = useRef<GSAPTween>();
  const introRef = useRef<HTMLDivElement>(null);

  const { setDisplayedIntro } = useContext(IntroContext);
  const getMemoizedHeroColor = useCallback((idParam: string) => getHero(heroColors, idParam), []);
  const getMemoizedRandomHeroColor = useCallback(() => getRandomHeroColor(), []);

  const getBgColor = () => (idParam ? getMemoizedHeroColor(idParam) : getMemoizedRandomHeroColor());
  const bgColor = getBgColor();

  useEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    tweenRef.current = gsap.fromTo(
      introRef.current,
      {
        backgroundColor: theme.light,
      },
      {
        duration: 0.5,
        backgroundColor: bgColor,
        ease: 'power1.inOut',
      },
    );
  }, [bgColor]);

  useEffect(() => {
    if (!introRef.current) {
      return;
    }

    tweenRef.current = gsap.to(introRef.current, {
      duration: 0.5,
      y: '-120%',
      ease: 'power1.in',
    });

    tweenRef.current.startTime(4.5).then(setDisplayedIntro);
  }, [setDisplayedIntro]);

  return (
    <StyledIntro ref={introRef}>
      <Logo />
      <Chars />
    </StyledIntro>
  );
};

export default Intro;
