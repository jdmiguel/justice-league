import styled from 'styled-components';
import { HeroMenuData as Hero } from '@/helpers/types';
import SupermanLogo from '@/components/views/HeroMenu/HeroLogo/SupermanLogo';
import BatmanLogo from '@/components/views/HeroMenu/HeroLogo/BatmanLogo';
import WonderWomanLogo from '@/components/views/HeroMenu/HeroLogo/WonderWomanLogo';
import FlashLogo from '@/components/views/HeroMenu/HeroLogo/FlashLogo';
import GreenLanternLogo from '@/components/views/HeroMenu/HeroLogo/GreenLanternLogo';
import GreenArrowLogo from '@/components/views/HeroMenu/HeroLogo/GreenArrowLogo';
import AquamanLogo from '@/components/views/HeroMenu/HeroLogo/AquamanLogo';
import CyborgLogo from '@/components/views/HeroMenu/HeroLogo/CyborgLogo';

export const StyledHeroLogo = styled.figure`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 4;
`;

type Props = {
  heroes: Hero[];
};

const HeroLogo: React.FC<Props> = ({ heroes }) => {
  const activeHeroId = heroes.find((hero) => hero.active);

  const getLogo = () => {
    switch (activeHeroId?.id) {
      case 'superman':
      default:
        return <SupermanLogo />;
      case 'batman':
        return <BatmanLogo />;
      case 'wonderwoman':
        return <WonderWomanLogo />;
      case 'flash':
        return <FlashLogo />;
      case 'greenlantern':
        return <GreenLanternLogo />;
      case 'greenarrow':
        return <GreenArrowLogo />;
      case 'aquaman':
        return <AquamanLogo />;
      case 'cyborg':
        return <CyborgLogo />;
    }
  };

  return <StyledHeroLogo>{getLogo()}</StyledHeroLogo>;
};

export default HeroLogo;
