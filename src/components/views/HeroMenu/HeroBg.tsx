import styled from 'styled-components';
import { getHero } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroMenuData as Hero, HeroIds } from '@/helpers/types';
import supermanBgPath from '@/assets/heroBg/superman.jpg';
import batmanBgPath from '@/assets/heroBg/batman.jpg';
import wonderwomanBgPath from '@/assets/heroBg/wonderwoman.jpg';
import flashBgPath from '@/assets/heroBg/flash.jpg';
import greenlanternBgPath from '@/assets/heroBg/greenlantern.jpg';
import aquamanBgPath from '@/assets/heroBg/aquaman.jpg';
import greenarrowBgPath from '@/assets/heroBg/greenarrow.jpg';
import cyborgBgPath from '@/assets/heroBg/cyborg.jpg';

export const StyledHeroBg = styled.div<{ bgPath: string; isActive: boolean; isDarkened: boolean }>`
  opacity: 0.35;
  background-image: ${({ bgPath }) => `url(${bgPath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  opacity: ${({ isActive, isDarkened }) => (isActive ? (isDarkened ? 0.3 : 1) : 0)};
  position: absolute;
  transform: ${({ isActive }) => (isActive ? 'scale(1)' : 'scale(1.3)')};
  transform-origin: 50%;
  transition: all 0.9s ${ease.smooth};
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
`;

const heroBgPaths: HeroIds = {
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
  heroes: Hero[];
  isDarkened: boolean;
};

const HeroBg: React.FC<Props> = ({ heroes, isDarkened }) => (
  <>
    {heroes.map((hero) => (
      <StyledHeroBg
        key={hero.id}
        bgPath={getHero(heroBgPaths, hero.id)}
        isActive={hero.active}
        isDarkened={isDarkened}
      />
    ))}
  </>
);

export default HeroBg;
