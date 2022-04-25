import styled from 'styled-components';
import { getHero } from '@/helpers';
import { ease } from '@/helpers/theme';
import { HeroMenuData as Hero, HeroIds } from '@/helpers/types';
import supermanLogoPath from '@/assets/logo/superman.svg';
import batmanLogoPath from '@/assets/logo/batman.svg';
import wonderwomanLogoPath from '@/assets/logo/wonderwoman.svg';
import flashLogoPath from '@/assets/logo/flash.svg';
import greenlanternLogoPath from '@/assets/logo/greenlantern.svg';
import aquamanLogoPath from '@/assets/logo/aquaman.svg';
import greenarrowLogoPath from '@/assets/logo/greenarrow.svg';
import cyborgLogoPath from '@/assets/logo/cyborg.svg';

export const StyledSidedrawer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  height: 100%;
  padding-left: 24px;
  position: absolute;
  z-index: 5;
`;

export const StyledSidedrawerList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 220px;
`;

export const StyledSidedrawerItem = styled.li<{ isActive: boolean }>`
  button {
    align-items: center;
    display: flex;
    pointer-events: ${({ isActive }) => isActive && 'none'};

    > div {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 34px;
      width: 60px;
    }

    &:hover {
      img {
        opacity: 1;
      }

      span {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  }

  img {
    height: 28px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
    transition: opacity 0.4s ${ease.medium};
    width: 32px;
  }

  span {
    margin-left: 8px;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transform: ${({ isActive }) => (isActive ? 'translateX(0px)' : 'translateX(15px)')};
    transition: all 0.4s ${ease.medium};
  }

  &:nth-of-type(2) {
    img {
      height: 34px;
      width: 36px;
    }
  }

  &:nth-of-type(4) {
    img {
      height: 34px;
      width: 32px;
    }
  }
`;

const heroLogoPaths: HeroIds = {
  superman: supermanLogoPath,
  batman: batmanLogoPath,
  wonderwoman: wonderwomanLogoPath,
  flash: flashLogoPath,
  greenlantern: greenlanternLogoPath,
  aquaman: aquamanLogoPath,
  greenarrow: greenarrowLogoPath,
  cyborg: cyborgLogoPath,
};

type Props = {
  heroes: Hero[];
  onClick: (id: string) => void;
};

const Sidedrawer: React.FC<Props> = ({ heroes, onClick }) => (
  <StyledSidedrawer>
    <StyledSidedrawerList>
      {heroes.map((hero) => (
        <StyledSidedrawerItem key={hero.id} isActive={hero.active}>
          <button onClick={() => onClick(hero.id)}>
            <div>
              <img src={getHero(heroLogoPaths, hero.id)} alt={`${hero.name} icon`} />
            </div>
            <span>{hero.name}</span>
          </button>
        </StyledSidedrawerItem>
      ))}
    </StyledSidedrawerList>
  </StyledSidedrawer>
);

export default Sidedrawer;
