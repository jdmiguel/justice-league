import { StyledHeaderDivider } from '@/components/layouts/styles';

type Props = {
  isLeaving?: boolean;
};

const Divider: React.FC<Props> = ({ isLeaving }) => <StyledHeaderDivider isLeaving={isLeaving} />;

export default Divider;
