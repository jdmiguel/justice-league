import { StyledHeaderLogo } from '@/components/layouts/styles';

type Props = {
  onClick?: () => void;
};

const Logo: React.FC<Props> = ({ onClick }) => (
  <StyledHeaderLogo>
    <button onClick={onClick}>
      <img src="/justice-league-white-logo.svg" alt="justice league logo" height={40} width={200} />
    </button>
  </StyledHeaderLogo>
);

export default Logo;
