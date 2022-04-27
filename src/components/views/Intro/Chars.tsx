import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { theme } from '@/helpers/theme';
import J from '@/components/views/Intro/chars/justice/J';
import U from '@/components/views/Intro/chars/justice/U';
import S from '@/components/views/Intro/chars/justice/S';
import T from '@/components/views/Intro/chars/justice/T';
import I from '@/components/views/Intro/chars/justice/I';
import C from '@/components/views/Intro/chars/justice/C';
import E from '@/components/views/Intro/chars/justice/E';
import L from '@/components/views/Intro/chars/league/L';
import E2 from '@/components/views/Intro/chars/league/E';
import A from '@/components/views/Intro/chars/league/A';
import G from '@/components/views/Intro/chars/league/G';
import U2 from '@/components/views/Intro/chars/league/U';
import E3 from '@/components/views/Intro/chars/league/LastE';

const posY = gsap.utils.wrap([20, -20, 30, -30, 40, -40, 50, 60, -65, 70, -75, 80, -85]);

const StyledChars = styled.svg`
  position: absolute;
  width: 45vw;
`;

const Chars: React.FC = () => {
  const tweenRef = useRef<GSAPTween>();
  const jRef = useRef<SVGPathElement>(null);
  const uRef = useRef<SVGPathElement>(null);
  const sRef = useRef<SVGPathElement>(null);
  const tRef = useRef<SVGPathElement>(null);
  const iRef = useRef<SVGPathElement>(null);
  const cRef = useRef<SVGPathElement>(null);
  const eRef = useRef<SVGPathElement>(null);
  const lRef = useRef<SVGPathElement>(null);
  const e2Ref = useRef<SVGPathElement>(null);
  const aRef = useRef<SVGPathElement>(null);
  const gRef = useRef<SVGPathElement>(null);
  const u2Ref = useRef<SVGPathElement>(null);
  const e3Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const tween = tweenRef.current;

    return () => {
      tween?.kill();
    };
  }, []);

  useEffect(() => {
    const chars = [
      jRef.current,
      uRef.current,
      sRef.current,
      tRef.current,
      iRef.current,
      cRef.current,
      eRef.current,
      lRef.current,
      e2Ref.current,
      aRef.current,
      gRef.current,
      u2Ref.current,
      e3Ref.current,
    ];

    if (!chars.every((char) => char)) {
      return;
    }

    tweenRef.current = gsap
      .fromTo(
        chars,
        {
          y: posY,
          strokeDasharray: 1300,
          strokeDashoffset: 0,
        },
        {
          duration: 3,
          y: 0,
          opacity: 1,
          fill: theme.dark,
          strokeDashoffset: 1300,
          ease: 'power1.inOut',
          stagger: 0.02,
        },
      )
      .startTime(1);
  }, []);

  return (
    <StyledChars
      width="700"
      height="563.287"
      viewBox="0 0 700 563.287"
      enableBackground="new 0 0 700 563.287"
      xmlSpace="preserve"
    >
      <J ref={jRef} />
      <U ref={uRef} />
      <S ref={sRef} />
      <T ref={tRef} />
      <I ref={iRef} />
      <C ref={cRef} />
      <E ref={eRef} />
      <L ref={lRef} />
      <E2 ref={e2Ref} />
      <A ref={aRef} />
      <G ref={gRef} />
      <U2 ref={u2Ref} />
      <E3 ref={e3Ref} />
    </StyledChars>
  );
};

export default Chars;
