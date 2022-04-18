import { useRef, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { getRandomHeroColor } from '@/helpers/theme';
import IntroContext from '@/contexts/IntroContext';
import Logo from '@/components/views/Intro/Logo';
import Chars from '@/components/views/Intro/Chars';

export const StyledIntro = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

const Intro: React.FC = () => {
  const tlRef = useRef<GSAPTimeline>();
  const introRef = useRef<HTMLDivElement>(null);

  const { setDisplayedIntro } = useContext(IntroContext);
  const getMemoizedRandomHeroColor = useCallback(() => getRandomHeroColor(), []);

  useEffect(() => {
    tlRef.current = gsap.timeline({
      onComplete: setDisplayedIntro,
    });

    tlRef.current.to(introRef.current, {
      duration: 0.5,
      delay: 4.5,
      y: '-120%',
      ease: 'power1.in',
    });

    return () => {
      tlRef.current?.kill();
    };
  }, [setDisplayedIntro]);

  return (
    <StyledIntro ref={introRef} bgColor={getMemoizedRandomHeroColor()}>
      <Logo />
      <Chars />
    </StyledIntro>
  );
};

export default Intro;
