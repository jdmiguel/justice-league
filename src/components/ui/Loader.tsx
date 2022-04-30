import { StyledLoaderWrapper, StyledLoader } from '@/components/ui/styles';

type Props = {
  withLightBg?: boolean;
};

const Loader: React.FC<Props> = ({ withLightBg = false }) => (
  <StyledLoaderWrapper withLightBg={withLightBg}>
    <StyledLoader role="progressbar">
      <span />
      <span />
      <span />
      <span />
      <span />
    </StyledLoader>
  </StyledLoaderWrapper>
);

export default Loader;
