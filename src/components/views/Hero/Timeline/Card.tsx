import {
  StyledCard,
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
};

const Card: React.FC<Props> = ({ color, semiTransparentColor, imagePath, title, description }) => (
  <StyledCard color={color}>
    <StyledCardImage
      src={imagePath}
      semiTransparentColor={semiTransparentColor}
      alt="timeline event"
    />
    <StyledCardText>
      <StyledCardTitle color={color}>{title}</StyledCardTitle>
      <StyledCardDescription>{description}</StyledCardDescription>
    </StyledCardText>
  </StyledCard>
);

export default Card;
