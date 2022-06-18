import supermanLogoPath from '@/assets/logo/superman.svg';
import batmanLogoPath from '@/assets/logo/batman.svg';
import wonderwomanLogoPath from '@/assets/logo/wonderwoman.svg';
import flashLogoPath from '@/assets/logo/flash.svg';
import greenlanternLogoPath from '@/assets/logo/greenlantern.svg';
import aquamanLogoPath from '@/assets/logo/aquaman.svg';
import greenarrowLogoPath from '@/assets/logo/greenarrow.svg';
import cyborgLogoPath from '@/assets/logo/cyborg.svg';
import { getHero } from '@/helpers';
import { HeroMenuData as Hero, HeroData, HeroId } from '@/helpers/types';
import {
  StyledSidedrawer,
  StyledSidedrawerList,
  StyledSidedrawerListItem,
} from '@/components/views/HeroMenu/styles';

const heroLogoPaths: HeroData = {
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
  isChangingHero: boolean;
  onClick: (id: HeroId) => void;
};

const Sidedrawer: React.FC<Props> = ({ heroes, isChangingHero, onClick }) => {
  const onClickItem = (heroId: HeroId) => {
    if (isChangingHero) {
      return;
    }

    onClick(heroId);
  };

  return (
    <StyledSidedrawer>
      <StyledSidedrawerList>
        {heroes.map((hero) => (
          <StyledSidedrawerListItem key={hero.id} isActive={hero.active}>
            <button onClick={() => onClickItem(hero.id)}>
              <div>
                <img src={getHero(heroLogoPaths, hero.id)} alt={`${hero.name} icon`} />
              </div>
              <span>{hero.name}</span>
            </button>
          </StyledSidedrawerListItem>
        ))}
      </StyledSidedrawerList>
    </StyledSidedrawer>
  );
};

export default Sidedrawer;
