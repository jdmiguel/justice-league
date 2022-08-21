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
  data: ProfileIntro;
  semiTransparentColor: string;
};

const Intro: React.FC<Props> = ({
  data: { name, alias, description, imagePath },
  semiTransparentColor,
}) => (
  <StyledIntro>
    <StyledIntroImage src={imagePath} semiTransparentColor={semiTransparentColor} alt={name} />
    <StyledIntroTextWrapper>
      <StyledIntroTitle>{name}</StyledIntroTitle>
      <StyledIntroSubtitle>{alias}</StyledIntroSubtitle>
      <StyledIntroDescription>{description}</StyledIntroDescription>
    </StyledIntroTextWrapper>
  </StyledIntro>
);
export default Intro;
