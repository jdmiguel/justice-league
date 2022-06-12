import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { ProfileAppearanceData } from '@/helpers/types';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Card from '@/components/views/Hero/Profile/Card';
import { StyledAppearance, StyledAppearanceImage } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileAppearanceData;
};

const Appearance: React.FC<Props> = ({
  data: { color, imgPath, race, height, weight, eyeColor, hairColor, powers },
}) => {
  const appearanceCardTweenRef = useRef<GSAPTween>();
  const imageTweenRef = useRef<GSAPTween>();
  const powersCardTweenRef = useRef<GSAPTween>();
  const appearanceRef = useRef<HTMLDivElement>(null);
  const appearanceCardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const powersCardRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(appearanceRef);
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    return () => {
      appearanceCardTweenRef.current?.kill();
      imageTweenRef.current?.kill();
      powersCardTweenRef.current?.kill();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    appearanceCardTweenRef.current = gsap.fromTo(
      appearanceCardRef.current,
      {
        opacity: 0,
        x: -120,
      },
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: ease.medium,
      },
    );

    imageTweenRef.current = gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: ease.medium,
      },
    );

    powersCardTweenRef.current = gsap.fromTo(
      powersCardRef.current,
      {
        opacity: 0,
        x: 120,
      },
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: ease.medium,
      },
    );
  }, [isVisible]);

  return (
    <StyledAppearance ref={appearanceRef}>
      <Card ref={appearanceCardRef} title="Appearance" color={color}>
        <ul>
          <li>
            race: <strong>{race}</strong>
          </li>
          <li>
            height: <strong>{height}</strong>
          </li>
          <li>
            weight: <strong>{weight}</strong>
          </li>
          <li>
            eye color: <strong>{eyeColor}</strong>
          </li>
          <li>
            hair color: <strong>{hairColor}</strong>
          </li>
        </ul>
      </Card>
      <StyledAppearanceImage ref={imageRef} src={imgPath} />
      <Card ref={powersCardRef} title="Powers" color={color}>
        <ul>
          {powers.map((power) => (
            <li key={power}>
              <strong>{power}</strong>
            </li>
          ))}
        </ul>
      </Card>
    </StyledAppearance>
  );
};

export default Appearance;
