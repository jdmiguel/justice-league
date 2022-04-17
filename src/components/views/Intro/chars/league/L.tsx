import { forwardRef } from 'react';
import { theme } from '@/helpers/theme';

export default forwardRef<SVGPathElement>((_, ref) => (
  <path
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="5"
    d="M18.791,287.934v233.714v40.324h87.563v-40.324h-48.59V287.934H18.791z"
  />
));
