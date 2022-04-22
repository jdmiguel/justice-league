import styled from 'styled-components';
import { HeroMenuData as Hero } from '@/helpers/types';

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
  transition: all 0.9s cubic-bezier(0.39, 0.575, 0.565, 1);
  visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
`;

type Props = {
  heroes: Hero[];
  isDarkened: boolean;
};

const HeroBg: React.FC<Props> = ({ heroes, isDarkened }) => (
  <>
    {heroes.map((hero) => (
      <StyledHeroBg
        key={hero.id}
        bgPath={hero.bgPath}
        isActive={hero.active}
        isDarkened={isDarkened}
      />
    ))}
  </>
);

export default HeroBg;
