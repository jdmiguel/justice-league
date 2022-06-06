import { forwardRef } from 'react';
import { StyledCard, StyledCardTitle } from '@/components/views/Hero/Profile/styles';

type Props = {
  data: any;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ data: { color, fullName, birthPlace, occupation, base, firstAppearance } }, ref) => (
    <StyledCard ref={ref} color={color}>
      <StyledCardTitle color={color}>Details</StyledCardTitle>
      <ul>
        <li>
          full name: <strong>{fullName}</strong>
        </li>
        <li>
          place of birth: <strong>{birthPlace}</strong>
        </li>
        <li>
          occupation: <strong>{occupation}</strong>
        </li>
        <li>
          base: <strong>{base}</strong>
        </li>
        <li>
          first appearance: <strong>{firstAppearance}</strong>
        </li>
      </ul>
    </StyledCard>
  ),
);

export default Card;
