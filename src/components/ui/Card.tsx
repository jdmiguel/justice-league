import { ReactNode } from 'react';
import Title from '@/components/ui/Title';
import {
  StyledCard,
  StyledCardVerticalWrapper,
  StyledCardVerticalContent,
  StyledCardHorizontalContent,
  StyledCardImage,
  StyledCardImageThumb,
  StyledCardText,
  StyledCardDescription,
} from '@/components/ui/styles';

type CardProps = {
  color: string;
  width?: number;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ color, width, children }) => (
  <StyledCard color={color} width={width}>
    {children}
  </StyledCard>
);

type ProfileCardProps = {
  title: string;
  color: string;
  children: ReactNode;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ title, color, children }) => (
  <Card color={color}>
    <StyledCardVerticalContent gap={12}>
      <Title text={title} color={color} />
      {children}
    </StyledCardVerticalContent>
  </Card>
);

type EnemyCardProps = {
  title: string;
  color: string;
  semiTransparentColor: string;
  imagePath: string;
  description: string;
};

const EnemyCard: React.FC<EnemyCardProps> = ({
  title,
  color,
  semiTransparentColor,
  imagePath,
  description,
}) => (
  <StyledCardVerticalWrapper>
    <Title text={title} color={color} withCenteredAlignment />
    <Card color={color}>
      <StyledCardVerticalContent gap={30}>
        <StyledCardImage src={imagePath} semiTransparentColor={semiTransparentColor} alt={title} />
        <StyledCardDescription textSize={18} withCenteredAlignment>
          {description}
        </StyledCardDescription>
      </StyledCardVerticalContent>
    </Card>
  </StyledCardVerticalWrapper>
);

const MobileEnemyCard: React.FC<EnemyCardProps> = ({
  title,
  color,
  semiTransparentColor,
  imagePath,
  description,
}) => (
  <Card color={color}>
    <StyledCardHorizontalContent>
      <StyledCardImage src={imagePath} semiTransparentColor={semiTransparentColor} alt={title} />
      <StyledCardText>
        <Title text={title} color={color} textSize={22} />
        <StyledCardDescription textSize={16}>{description}</StyledCardDescription>
      </StyledCardText>
    </StyledCardHorizontalContent>
  </Card>
);

type TimelineCardProps = EnemyCardProps;

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  color,
  semiTransparentColor,
  imagePath,
  description,
}) => (
  <Card color={color} width={480}>
    <StyledCardHorizontalContent>
      <StyledCardImageThumb
        src={imagePath}
        semiTransparentColor={semiTransparentColor}
        alt={title}
      />
      <StyledCardText>
        <Title text={title} color={color} textSize={21} />
        <StyledCardDescription textSize={16}>{description}</StyledCardDescription>
      </StyledCardText>
    </StyledCardHorizontalContent>
  </Card>
);

export { ProfileCard, EnemyCard, MobileEnemyCard, TimelineCard };
