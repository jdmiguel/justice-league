import styled from 'styled-components';
import { animation } from '@/helpers/theme';

const StyledLoaderWrapper = styled.div<{ withLightBg: boolean }>`
  align-items: center;
  background-color: ${({ theme, withLightBg }) => (withLightBg ? theme.light : theme.dark)};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StyledLoader = styled.div`
  align-items: center;
  display: flex;
  gap: 2px;
  height: 100px;
  justify-content: center;
  width: 100px;

  span {
    animation: ${animation.scale} 1s linear infinite;
    background: ${({ theme }) => theme.light};
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    display: inline-block;
    height: 30px;
    transform-origin: bottom center;
    width: 5px;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }

    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }

    &:nth-of-type(4) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(5) {
      animation-delay: 0.5s;
    }
  }
`;

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
