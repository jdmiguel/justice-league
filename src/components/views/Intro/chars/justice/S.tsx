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
    d="M249.91,0c-10.151,0-21.196,11.852-21.196,22.144v88.249c1.445,4.406,3.912,8.816,9.617,13.223l55.044,41.062v71.125h-26.41v-42.01l-32.557-25.181h-5.694v83.957c0,10.293,11.044,21.828,21.196,21.828h60.864c10.151,0,20.814-11.535,20.814-21.828V146.846c-1.443-4.406-3.91-8.816-9.617-13.223l-55.043-41.125V39.29h27.902v45.743l5.314,0.38l31.444-24.295V22.144C331.588,11.852,320.925,0,310.774,0H249.91z"
  />
));
