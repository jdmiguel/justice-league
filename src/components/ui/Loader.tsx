import { StyledLoaderWrapper, StyledLoader } from '@/components/ui/styles';

type Props = {
  withLightBg?: boolean;
  shouldFitWithHeaderPage?: boolean;
};

const Loader: React.FC<Props> = ({ withLightBg = false, shouldFitWithHeaderPage = false }) => (
  <StyledLoaderWrapper withLightBg={withLightBg}>
    <StyledLoader role="progressbar" withMarginBottom={shouldFitWithHeaderPage}>
      <span />
      <span />
      <span />
      <span />
      <span />
    </StyledLoader>
  </StyledLoaderWrapper>
);

export default Loader;
