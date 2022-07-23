import { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import {
  StyledLeftCard,
  StyledRightCard,
  StyledCardTitle,
  StyledCardContent,
  StyledCardImage,
  StyledCardDescription,
} from '@/components/views/Hero/Enemies/styles';

type Props = {
  color: string;
  semiTransparentColor: string;
  title: string;
  imagePath: string;
  description: string;
  xOrigin?: 'left' | 'right';
};

const Card: React.FC<Props> = ({
  color,
  semiTransparentColor,
  title,
  imagePath,
  description,
  xOrigin,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(cardRef, {
    threshold: 0.4,
    root: null,
    rootMargin: '-12%',
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <>
      {xOrigin === 'left' ? (
        <StyledLeftCard ref={cardRef} color={color} isVisible={isVisible}>
          <StyledCardTitle color={color}>{title}</StyledCardTitle>
          <StyledCardContent color={color}>
            <StyledCardImage
              src={imagePath}
              semiTransparentColor={semiTransparentColor}
              alt={title}
            />
            <StyledCardDescription>{description}</StyledCardDescription>
          </StyledCardContent>
        </StyledLeftCard>
      ) : (
        <StyledRightCard ref={cardRef} color={color} isVisible={isVisible}>
          <StyledCardTitle color={color}>{title}</StyledCardTitle>
          <StyledCardContent color={color}>
            <StyledCardImage
              src={imagePath}
              semiTransparentColor={semiTransparentColor}
              alt={title}
            />
            <StyledCardDescription>{description}</StyledCardDescription>
          </StyledCardContent>
        </StyledRightCard>
      )}
    </>
  );
};

export default Card;
