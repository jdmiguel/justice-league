import { StyledLoaderWrapper, StyledLoader } from '@/components/ui/styles';

type Props = {
  withLightBg?: boolean;
  shouldFitWithHeaderPage?: boolean;
};

const Loader: React.FC<Props> = () => (
  <StyledLoaderWrapper>
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
