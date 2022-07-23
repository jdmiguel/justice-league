import { ProfileIntroData } from '@/helpers/types';
import {
  StyledIntro,
  StyledIntroImage,
  StyledIntroTextWrapper,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroDescription,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  data: ProfileIntroData;
};

const Intro: React.FC<Props> = ({
  data: { semiTransparentColor, imgPath, title, subtitle, description },
}) => (
  <StyledIntro>
    <StyledIntroImage src={imgPath} semiTransparentColor={semiTransparentColor} alt={title} />
    <StyledIntroTextWrapper>
      <StyledIntroTitle>{title}</StyledIntroTitle>
      <StyledIntroSubtitle>{subtitle}</StyledIntroSubtitle>
      <StyledIntroDescription>{description}</StyledIntroDescription>
    </StyledIntroTextWrapper>
  </StyledIntro>
);

export default Intro;
