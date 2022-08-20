import { ProfileIntroData } from '@/helpers/types';
import { useHeroMeta } from '@/contexts/HeroMetasContext';
import {
  StyledIntro,
  StyledIntroImage,
  StyledIntroTextWrapper,
  StyledIntroTitle,
  StyledIntroSubtitle,
  StyledIntroDescription,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  semiTransparentColor: string;
  data: ProfileIntroData | null;
};

const Intro: React.FC<Props> = ({ semiTransparentColor, data }) => {
  const { heroMetas } = useHeroMeta();

  return (
    <StyledIntro>
      <StyledIntroImage
        src={data?.imagePath}
        semiTransparentColor={semiTransparentColor}
        alt={data?.name}
      />
      <StyledIntroTextWrapper>
        <StyledIntroTitle>{data?.name}</StyledIntroTitle>
        <StyledIntroSubtitle>{data?.alias}</StyledIntroSubtitle>
        <StyledIntroDescription>{data?.description}</StyledIntroDescription>
      </StyledIntroTextWrapper>
    </StyledIntro>
  );
};

export default Intro;
