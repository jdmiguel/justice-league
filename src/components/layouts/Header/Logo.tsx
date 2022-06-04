import justiceLeagueLogoPath from '@/assets/logo/justice-league.svg';
import { StyledHeaderLogo } from '@/components/layouts/styles';

type Props = {
  onClick?: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => (
  <StyledHeaderLogo>
    <button onClick={onClick}>
      <img src={justiceLeagueLogoPath} alt="justice league logo" height={40} width={200} />
    </button>
  </StyledHeaderLogo>
);

export default Logo;
