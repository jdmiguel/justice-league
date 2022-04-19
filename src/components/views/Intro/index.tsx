import { useRef, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { getHeroColor, getRandomHeroColor } from '@/helpers/theme';
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
  z-index: 4;
`;

type Props = {
  idParam?: string;
};

const Intro: React.FC<Props> = ({ idParam }) => {
  const tlRef = useRef<GSAPTimeline>();
  const introRef = useRef<HTMLDivElement>(null);

  const { setDisplayedIntro } = useContext(IntroContext);
  const getMemoizedHeroColor = useCallback((idParam: string) => getHeroColor(idParam), []);
  const getMemoizedRandomHeroColor = useCallback(() => getRandomHeroColor(), []);

  const getBgColor = () => (idParam ? getMemoizedHeroColor(idParam) : getMemoizedRandomHeroColor());

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
    <StyledIntro ref={introRef} bgColor={getBgColor()}>
      <Logo />
      <Chars />
    </StyledIntro>
  );
};

export default Intro;
