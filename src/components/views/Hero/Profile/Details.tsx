import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ease } from '@/helpers/theme';
import { ProfileDetailsData } from '@/helpers/types';
import Card from '@/components/views/Hero/Profile/Card';
import { StyledDetails, StyledDetailsImage } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileDetailsData;
};

const Details: React.FC<Props> = ({
  data: {
    semiTransparentColor,
    color,
    imgPath,
    fullName,
    birthPlace,
    occupation,
    base,
    firstAppearance,
  },
}) => {
  const cardTweenRef = useRef<GSAPTween>();
  const imageTweenRef = useRef<GSAPTween>();
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    cardTweenRef.current = gsap.fromTo(
      cardRef.current,
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

  const cardData = { color, fullName, birthPlace, occupation, base, firstAppearance };

  return (
    <StyledDetails>
      <Card ref={cardRef} data={cardData} />
      <StyledDetailsImage
        ref={imageRef}
        src={imgPath}
        semiTransparentColor={semiTransparentColor}
      />
    </StyledDetails>
  );
};

export default Details;
