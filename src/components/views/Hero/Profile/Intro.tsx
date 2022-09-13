import { ProfileIntro } from '@/helpers/types';
import {
  StyledIntro,
  StyledIntroImage,
  StyledIntroTextWrapper,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroDescription,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  heroName: string;
  data: ProfileIntro;
  semiTransparentColor: string;
};

const Intro: React.FC<Props> = ({
  heroName: name,
  data: { alias, description, imagePath },
  semiTransparentColor,
}) => (
  <StyledIntro data-testid="profile-intro">
    <StyledIntroImage
      src={imagePath}
      semiTransparentColor={semiTransparentColor}
      alt="hero intro"
    />
    <StyledIntroTextWrapper>
      <StyledIntroTitle>{name}</StyledIntroTitle>
      <StyledIntroSubtitle>{alias}</StyledIntroSubtitle>
      <StyledIntroDescription>{description}</StyledIntroDescription>
    </StyledIntroTextWrapper>
  </StyledIntro>
);
export default Intro;
