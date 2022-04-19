import styled from 'styled-components';
import { HeroMenuData as Hero } from '@/helpers/types';

export const StyledSidedrawer = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 3;
`;

type Props = {
  heroes: Hero[];
};

const Sidedrawer: React.FC<Props> = ({ heroes }) => (
  <StyledSidedrawer>
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>
          <button onClick={() => console.log(hero.name)}>
            <img
              src={hero.logoPath}
              alt={`${hero.name} icon`}
              width={hero.iconWidth}
              height={hero.iconHeight}
            ></img>
            <span>{hero.name}</span>
          </button>
        </li>
      ))}
    </ul>
  </StyledSidedrawer>
);

export default Sidedrawer;
