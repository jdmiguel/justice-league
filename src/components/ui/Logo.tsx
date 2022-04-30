import justiceLeagueLogoPath from '@/assets/logo/justice-league.svg';
import { StyledLogo } from '@/components/ui/styles';

const Logo: React.FC = () => (
  <StyledLogo>
    <img src={justiceLeagueLogoPath} alt="justice league logo" height={40} width={200} />
  </StyledLogo>
);

export default Logo;
