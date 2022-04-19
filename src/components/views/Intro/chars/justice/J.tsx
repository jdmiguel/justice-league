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
    d="M17.905,0l13.223,39.226h33.595c0.98,0,1.772,0.792,1.772,1.772v192.335c0,0.979-0.792,1.771-1.772,1.771H39.669c-0.98,0-1.772-0.792-1.772-1.771v-65.356L0,193.981v53.271v8.541c0,10.293,8.28,18.601,18.538,18.601h67c10.258,0,18.475-8.308,18.475-18.601v-8.541V18.601V0H85.538h-67H17.905z"
  />
));
