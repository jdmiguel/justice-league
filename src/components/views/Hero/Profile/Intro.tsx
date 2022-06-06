import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { ProfileIntroData } from '@/helpers/types';
import {
  StyledIntro,
  StyledIntroImage,
  StyledIntroTextWrapper,
  StyledIntroTitle,
  StyledIntroSubtitle,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileIntroData;
};

const Intro: React.FC<Props> = ({
  data: { semiTransparentColor, imgPath, title, subtitle, description },
}) => {
  const imageTweenRef = useRef<GSAPTween>();
  const textWrapperTweenRef = useRef<GSAPTween>();
  const imageRef = useRef<HTMLImageElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    imageTweenRef.current = gsap.fromTo(
      imageRef.current,
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

    textWrapperTweenRef.current = gsap.fromTo(
      textWrapperRef.current,
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

    return () => {
      imageTweenRef.current?.kill();
    };
  }, []);

  return (
    <StyledIntro>
      <StyledIntroImage ref={imageRef} src={imgPath} semiTransparentColor={semiTransparentColor} />
      <StyledIntroTextWrapper ref={textWrapperRef}>
        <StyledIntroTitle>{title}</StyledIntroTitle>
        <StyledIntroSubtitle>{subtitle}</StyledIntroSubtitle>
        <p>{description}</p>
      </StyledIntroTextWrapper>
    </StyledIntro>
  );
};

export default Intro;
