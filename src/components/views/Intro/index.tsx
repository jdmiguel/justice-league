import { useRef, useEffect, useContext, useCallback } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { getHero } from '@/helpers';
import { heroColors, getRandomHeroColor } from '@/helpers/theme';
import IntroContext from '@/contexts/IntroContext';
import Logo from '@/components/views/Intro/Logo';
import Chars from '@/components/views/Intro/Chars';

export const StyledIntro = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100%;
  z-index: 6;
`;

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

    return () => {
      tweenRef.current?.kill();
    };
  }, [setDisplayedIntro]);

  return (
    <StyledIntro ref={introRef} bgColor={getBgColor()}>
      <Logo />
      <Chars />
    </StyledIntro>
  );
};

export default Intro;
