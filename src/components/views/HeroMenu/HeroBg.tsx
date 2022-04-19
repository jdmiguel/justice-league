import styled from 'styled-components';
import { HeroMenuData as Hero } from '@/helpers/types';

export const StyledHeroBg = styled.div<{ bgPath: string; active: boolean }>`
  opacity: 0.35;
  background-image: ${({ bgPath }) => `url(${bgPath})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  opacity: ${({ active }) => (active ? 1 : 0)};
  position: absolute;
  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(1.3)')};
  transform-origin: 50%;
  transition: all 0.9s cubic-bezier(0.39, 0.575, 0.565, 1);
  visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
  width: 100%;
  z-index: 1;
`;

type Props = {
  heroes: Hero[];
};

const HeroBg: React.FC<Props> = ({ heroes }) => (
  <>
    {heroes.map((hero) => (
      <StyledHeroBg key={hero.id} bgPath={hero.bgPath} active={hero.active} />
    ))}
  </>
);

export default HeroBg;
