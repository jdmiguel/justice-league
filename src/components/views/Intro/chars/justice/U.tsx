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
    strokeWidth="5"
    d="M114.958,0v255.793c1.389,10.573,6.738,17.45,18.221,18.601h65.926c10.092,0,18.158-8.308,18.158-18.601V0H181.2v233.397c0,1.379-1.088,2.467-2.468,2.467h-24.295c-1.379,0-2.531-1.087-2.531-2.467V0H114.958z"
  />
));
