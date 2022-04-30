import { forwardRef } from 'react';
import { theme } from '@/helpers/theme';
import { StyledChar } from '@/components/views/Intro/styles';

export default forwardRef<SVGPathElement>((_, ref) => (
  <StyledChar
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="3"
    d="M506.525,0c-11.484,1.151-16.833,8.028-18.222,18.601v74.404l4.808,14.868h27.144l-24.295,17.905l11.071,27.838l-18.728-12.843v115.021c1.389,10.573,6.737,17.45,18.222,18.601h65.926c10.093,0,18.157-8.308,18.157-18.601v-60.737l-36.063-28.217v66.558c0,1.379-1.087,2.467-2.467,2.467h-24.295c-1.381,0-2.53-1.087-2.53-2.467V53.588v-12.59c0-1.379,1.149-2.468,2.53-2.468h24.295c1.38,0,2.467,1.088,2.467,2.468v12.59v46.059l36.063-26.382V18.601C590.608,8.309,582.544,0,572.451,0H506.525z"
  />
));
