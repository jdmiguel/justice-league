import {
  StyledLeftCard,
  StyledRightCard,
  StyledCardImage,
  StyledCardText,
  StyledCardTitle,
  StyledCardDescription,
} from '@/components/views/Hero/Timeline/styles';

type Props = {
  color: string;
  semiTransparentColor: string;
  imagePath: string;
  title: string;
  description: string;
  isVisible: boolean;
  xOrigin?: 'left' | 'right';
};

const Card: React.FC<Props> = ({
  color,
  semiTransparentColor,
  imagePath,
  title,
  description,
  isVisible,
  xOrigin = 'left',
}) => (
  <>
    {xOrigin === 'left' ? (
      <StyledLeftCard color={color} isVisible={isVisible}>
        <StyledCardImage
          src={imagePath}
          semiTransparentColor={semiTransparentColor}
          alt="timeline event"
        />
        <StyledCardText>
          <StyledCardTitle color={color}>{title}</StyledCardTitle>
          <StyledCardDescription>{description}</StyledCardDescription>
        </StyledCardText>
      </StyledLeftCard>
    ) : (
      <StyledRightCard color={color} isVisible={isVisible}>
        <StyledCardImage
          src={imagePath}
          semiTransparentColor={semiTransparentColor}
          alt="timeline event"
        />
        <StyledCardText>
          <StyledCardTitle color={color}>{title}</StyledCardTitle>
          <StyledCardDescription>{description}</StyledCardDescription>
        </StyledCardText>
      </StyledRightCard>
    )}
  </>
);

export default Card;
