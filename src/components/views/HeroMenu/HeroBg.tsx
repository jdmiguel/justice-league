import { getHero } from '@/helpers';
import supermanBgPath from '@/assets/heroBg/superman.jpg';
import batmanBgPath from '@/assets/heroBg/batman.jpg';
import wonderwomanBgPath from '@/assets/heroBg/wonderwoman.jpg';
import flashBgPath from '@/assets/heroBg/flash.jpg';
import greenlanternBgPath from '@/assets/heroBg/greenlantern.jpg';
import aquamanBgPath from '@/assets/heroBg/aquaman.jpg';
import greenarrowBgPath from '@/assets/heroBg/greenarrow.jpg';
import cyborgBgPath from '@/assets/heroBg/cyborg.jpg';
import { HeroMenuData, HeroData, HeroId } from '@/helpers/types';
import { StyledHeroBg } from '@/components/views/HeroMenu/styles';

const heroBgPaths: HeroData = {
  superman: supermanBgPath,
  batman: batmanBgPath,
  wonderwoman: wonderwomanBgPath,
  flash: flashBgPath,
  greenlantern: greenlanternBgPath,
  aquaman: aquamanBgPath,
  greenarrow: greenarrowBgPath,
  cyborg: cyborgBgPath,
};

type Props = {
  heroes: HeroMenuData[];
  isDarkened: boolean;
};

const HeroBg: React.FC<Props> = ({ heroes, isDarkened }) => (
  <>
    {heroes.map((hero) => (
      <StyledHeroBg
        key={hero.id}
        bgPath={getHero(heroBgPaths, hero.id as HeroId)}
        isActive={hero.active}
        isDarkened={isDarkened}
      />
    ))}
  </>
);

export default HeroBg;
