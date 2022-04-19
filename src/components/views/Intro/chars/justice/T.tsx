import { forwardRef } from 'react';
import styled from 'styled-components';
import { theme } from '@/helpers/theme';

export const StyledChar = styled.path`
  opacity: 0;
`;

export default forwardRef<SVGPathElement>((_, ref) => (
  <StyledChar
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="3"
    d="M339.117,0.696v37.897h23.789c1.38,0,2.468,1.088,2.468,2.467v233.333h37.139V41.061c0-1.379,1.15-2.467,2.53-2.467h25.181V0.696H339.117z"
  />
));
