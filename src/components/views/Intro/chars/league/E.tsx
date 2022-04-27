import { forwardRef } from 'react';
import styled from 'styled-components';
import { theme } from '@/helpers/theme';

const StyledChar = styled.path`
  opacity: 0;
`;

export default forwardRef<SVGPathElement>((_, ref) => (
  <StyledChar
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="3"
    d="M115.888,287.696v273.951h91.939v-39.48h-54.041v-88.892h41.376l15.363-39.479h-56.74v-66.622h59.599v-39.479H115.888z"
  />
));
