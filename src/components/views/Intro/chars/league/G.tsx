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
    d="M351.252,308.126c1.79-8.682,3.093-17.531,19.959-20.969h72.253c8.541,3.898,16.618,8.463,19.199,20.969v53.307l-36.38,25.769v-60.633h-38.651v195.287h37.642v-73.771h-23.242l12.884-39.663h47.748v153.854h-26.021l-5.305-12.127c-7.07,8.439-15.162,12.782-24.253,13.138h-35.369c-14.831-1.53-19.527-10.66-20.969-22.232L351.252,308.126z"
  />
));
