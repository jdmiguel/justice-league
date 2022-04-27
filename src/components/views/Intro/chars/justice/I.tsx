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
    d="M438.765,0.443v273.951h37.897V140.14l-18.601,12.78l9.996-28.217l-24.295-17.525h29.356l3.543-11.578V0.443H438.765z"
  />
));
