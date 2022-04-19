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
    d="M602.503,287.475v273.951H700v-39.479h-59.6v-88.892h41.378l13.219-39.479H640.4v-66.621H700v-39.479H602.503z"
  />
));
