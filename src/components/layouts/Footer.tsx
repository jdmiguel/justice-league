import NavigationDemo from '@/components/ui/NavigationDemo';
import { StyledFooter, StyledFooterLink } from '@/components/layouts/styles';

type Props = {
  isLeaving?: boolean;
};

const Footer: React.FC<Props> = ({ isLeaving }) => (
  <StyledFooter isLeaving={isLeaving}>
    <div>
      Created by
      <StyledFooterLink
        href="https://jdmiguel.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View source on GitHub"
      >
        jdmiguel
      </StyledFooterLink>
    </div>
    <NavigationDemo />
  </StyledFooter>
);

export default Footer;
