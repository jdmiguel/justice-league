import { forwardRef } from 'react';
import { theme } from '@/helpers/theme';

export default forwardRef<SVGPathElement>((_, ref) => (
  <path
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="5"
    d="M475.81,287.253v18.601v228.651v8.542c0,10.292,8.924,18.601,20.004,18.601h72.372c11.079,0,19.934-8.309,19.934-18.601v-8.542V305.854v-18.601h-19.934h-19.656v233.396c0,1.38-1.193,2.467-2.708,2.467h-26.672c-1.515,0-2.777-1.087-2.777-2.467V287.253h-20.559H475.81z"
  />
));
