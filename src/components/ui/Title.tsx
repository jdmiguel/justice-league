import { StyledTitle } from '@/components/ui/styles';

type Props = {
  text: string;
  color: string;
  textSize?: number;
  withCenteredAlignment?: boolean;
};

const Title: React.FC<Props> = ({ text, color, textSize = 26, withCenteredAlignment = false }) => (
  <StyledTitle color={color} textSize={textSize} withCenteredAlignment={withCenteredAlignment}>
    {text}
  </StyledTitle>
);

export default Title;
