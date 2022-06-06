import { HeroIntroData } from '@/helpers/types';
import {
  StyledIntro,
  StyledIntroImage,
  StyledIntroTextWrapper,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroDescription,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  data: HeroIntroData;
};

const Intro: React.FC<Props> = ({
  data: { color, semiTransparentColor, imgPath, title, subtitle, description },
}) => (
  <StyledIntro>
    <StyledIntroImage src={imgPath} semiTransparentColor={semiTransparentColor} />
    <StyledIntroTextWrapper>
      <StyledIntroTitle>{title}</StyledIntroTitle>
      <StyledIntroSubtitle>{subtitle}</StyledIntroSubtitle>
      <StyledIntroDescription>{description}</StyledIntroDescription>
    </StyledIntroTextWrapper>
  </StyledIntro>
);

export default Intro;
