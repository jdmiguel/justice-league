import { useContext } from 'react';
import IntroContext from '@/contexts/IntroContext';
import Logo from '@/components/ui/Logo';
import Corner from '@/components/ui/Corner';
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderMenuList,
  StyledHeaderMenuListItem,
} from '@/components/layouts/styles';

type Props = {
  withNavigation?: boolean;
  isLeaving?: boolean;
  onClick: (path: string) => void;
};

const Header: React.FC<Props> = ({ withNavigation = false, isLeaving = false, onClick }) => {
  const { isDisplayed: isIntroDisplayed } = useContext(IntroContext);

  return (
    <StyledHeader
      withNavigation={withNavigation}
      isEntering={!isIntroDisplayed}
      isLeaving={isLeaving}
    >
      <Logo />
      {withNavigation ? (
        <StyledHeaderMenu>
          <StyledHeaderMenuList>
            <StyledHeaderMenuListItem>
              <button onClick={() => onClick('/')}>HOME</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem isActive>
              <button>PROFILE</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem>
              <button>MOVIES & SERIES</button>
            </StyledHeaderMenuListItem>
            <StyledHeaderMenuListItem>
              <button>COMICS</button>
            </StyledHeaderMenuListItem>
          </StyledHeaderMenuList>
        </StyledHeaderMenu>
      ) : (
        <Corner />
      )}
    </StyledHeader>
  );
};

export default Header;
