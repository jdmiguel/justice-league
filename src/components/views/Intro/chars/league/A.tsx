import { forwardRef } from 'react';
import { theme } from '@/helpers/theme';

export default forwardRef<SVGPathElement>((_, ref) => (
  <path
    ref={ref}
    fill={theme.light}
    stroke={theme.light}
    strokeWidth="5"
    d="M250.94,287.681l-35.07,273.572h36.57l5.061-42.2h45.047l4.997,42.2h36.633L309.11,287.681H250.94z M280.024,339.233l17.716,139.644h-35.494L280.024,339.233z"
  />
));
