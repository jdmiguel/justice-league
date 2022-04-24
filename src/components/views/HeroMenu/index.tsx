import { useState, useContext } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import styled from 'styled-components';
import noiseTexturePath from '@/assets/heroBg/noise-texture.png';
import { animation, ease } from '@/helpers/theme';
import IntroContext from '@/contexts/IntroContext';
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
  const [isMenuHighlighted, setIsMenuHighlighted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isChangingHeading, setIsChangingHeading] = useState(false);

  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);
  const { heroes, setActiveHero, setActivePrevHero, setActiveNextHero } = useHeroMenu();

  const onSetPrevActiveHero = () => {
    if (isChangingHeading || isIntroDisplayed) {
      return;
    }
    setActivePrevHero();
  };

  const onSetActiveHero = () => {
    if (isChangingHeading || isIntroDisplayed) {
      return;
    }
    setActiveNextHero();
  };

  return (
    <ReactScrollWheelHandler downHandler={onSetPrevActiveHero} upHandler={onSetActiveHero}>
      <StyledHeroMenu isFaded={isLeaving}>
        <HeroBg heroes={heroes} isDarkened={isMenuHighlighted} />
        <Sidedrawer heroes={heroes} onClick={setActiveHero} />
        <HeroLogo heroes={heroes} isHighlighted={isMenuHighlighted} isFaded={isLeaving} />
        <HeroHeading
          heroes={heroes}
          onDistanceChars={() => setIsMenuHighlighted(true)}
          onShrinkChars={() => setIsMenuHighlighted(false)}
          onInitChange={() => setIsChangingHeading(true)}
          onEndChange={() => setIsChangingHeading(false)}
          onClick={() => {
            setIsLeaving(true);
          }}
        />
        <StyledGrainedBg />
      </StyledHeroMenu>
    </ReactScrollWheelHandler>
  );
};

export default HeroMenu;
