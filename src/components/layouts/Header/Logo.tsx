import { MouseEventHandler } from 'react';
import { StyledHeaderLogo } from '@/components/layouts/styles';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLeaving?: boolean;
};

const Logo: React.FC<Props> = ({ onClick, isLeaving }) => (
  <StyledHeaderLogo isLeaving={isLeaving}>
    <button onClick={onClick}>
      <img src="/justice-league-white-logo.svg" alt="justice league logo" height={40} width={200} />
    </button>
  </StyledHeaderLogo>
);

export default Logo;
