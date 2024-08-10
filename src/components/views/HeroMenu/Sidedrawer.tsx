import { HeroMenuData as Hero, HeroId } from '@/helpers/types';
import {
  StyledSidedrawer,
  StyledSidedrawerList,
  StyledSidedrawerListItem,
} from '@/components/views/HeroMenu/styles';

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
    <StyledSidedrawer data-testid="sidedrawer">
      <StyledSidedrawerList>
        {heroes.map(({ id, name, active, whiteLogoPath }) => (
          <StyledSidedrawerListItem key={id} isActive={active}>
            <button onClick={() => onClickItem(id as HeroId)}>
              <div>
                <img src={whiteLogoPath} alt={`${name} icon`} />
              </div>
              <span>{name}</span>
            </button>
          </StyledSidedrawerListItem>
        ))}
      </StyledSidedrawerList>
    </StyledSidedrawer>
  );
};

export default Sidedrawer;
