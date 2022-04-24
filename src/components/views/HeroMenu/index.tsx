import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import styled from 'styled-components';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';
import { animation, ease } from '@/helpers/theme';
import useHeroMenu from '@/hooks/useHeroMenu';
import HeroBg from '@/components/views/HeroMenu/HeroBg';
import Sidedrawer from '@/components/views/HeroMenu/Sidedrawer';
import HeroLogo from '@/components/views/HeroMenu/HeroLogo';
import HeroHeading from '@/components/views/HeroMenu/HeroHeading';

export const StyledHeroMenu = styled.main<{ isFaded: boolean }>`
  opacity: ${({ isFaded }) => isFaded && 0};
  transition: opacity 1s ${ease.smooth} 0.2s;
`;

export const StyledGrainedBg = styled.div`
  animation: ${animation.noise} 5s infinite;
  animation-timing-function: steps(10);
  backface-visibility: hidden;
  background-image: url(${noiseTexturePath});
  background-color: ${({ theme }) => theme.alphaDark_65};
  height: 300%;
  left: -100%;
  position: absolute;
  top: -100%;
  transform: translateZ(0);
  width: 300%;
  will-change: transform;
  z-index: 2;
`;

const HeroMenu: React.FC = () => {
  const {
    heroes,
    setActiveHero,
    setActivePrevHero,
    setActiveNextHero,
    onInitChangeHero,
    onEndChangeHero,
    isHeroHighlighted,
    onInitHighlightHero,
    onEndHighlightHero,
    isLeavingMenu,
    onInitLeaveMenu,
    onEndLeaveMenu,
  } = useHeroMenu();

  return (
    <ReactScrollWheelHandler downHandler={setActivePrevHero} upHandler={setActiveNextHero}>
      <StyledHeroMenu isFaded={isLeavingMenu}>
        <HeroBg heroes={heroes} isDarkened={isHeroHighlighted} />
        <Sidedrawer heroes={heroes} onClick={setActiveHero} />
        <HeroLogo heroes={heroes} isHighlighted={isHeroHighlighted} isFaded={isLeavingMenu} />
        <HeroHeading
          heroes={heroes}
          onDistanceChars={onInitHighlightHero}
          onShrinkChars={onEndHighlightHero}
          onInitChange={onInitChangeHero}
          onEndChange={onEndChangeHero}
          onClick={onInitLeaveMenu}
          onLeave={onEndLeaveMenu}
        />
        <StyledGrainedBg />
      </StyledHeroMenu>
    </ReactScrollWheelHandler>
  );
};

export default HeroMenu;
