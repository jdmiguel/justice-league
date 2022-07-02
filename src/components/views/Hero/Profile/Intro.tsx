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
}) => (
  <StyledIntro>
    <StyledIntroImage src={imgPath} semiTransparentColor={semiTransparentColor} />
    <StyledIntroTextWrapper>
      <StyledIntroTitle>{title}</StyledIntroTitle>
      <StyledIntroSubtitle>{subtitle}</StyledIntroSubtitle>
      <p>{description}</p>
    </StyledIntroTextWrapper>
  </StyledIntro>
);

export default Intro;
