import { PageId } from '@/helpers/types';
import {
  StyledHeaderNavigation,
  StyledHeaderNavigationList,
  StyledHeaderNavigationListItem,
} from '@/components/layouts/styles';

type Props = {
  pageId: PageId;
  onClick: (path: PageId) => void;
  isLeaving?: boolean;
};

const Navigation: React.FC<Props> = ({ pageId, onClick, isLeaving }) => (
  <StyledHeaderNavigation isLeaving={isLeaving}>
    <StyledHeaderNavigationList>
      <StyledHeaderNavigationListItem isActive={pageId === 'root'}>
        <button onClick={() => onClick('root')}>HOME</button>
      </StyledHeaderNavigationListItem>
      <StyledHeaderNavigationListItem isActive={pageId === 'profile'}>
        <button onClick={() => onClick('profile')}>PROFILE</button>
      </StyledHeaderNavigationListItem>
      <StyledHeaderNavigationListItem isActive={pageId === 'enemies'}>
        <button onClick={() => onClick('enemies')}>ENEMIES</button>
      </StyledHeaderNavigationListItem>
      <StyledHeaderNavigationListItem isActive={pageId === 'timeline'}>
        <button onClick={() => onClick('timeline')}>TIMELINE</button>
      </StyledHeaderNavigationListItem>
    </StyledHeaderNavigationList>
  </StyledHeaderNavigation>
);

export default Navigation;
