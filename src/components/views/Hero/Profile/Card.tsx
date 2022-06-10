import { forwardRef, ReactNode } from 'react';
import { StyledCard, StyledCardTitle } from '@/components/views/Hero/Profile/styles';

type Props = {
  title: string;
  color: string;
  children: ReactNode;
};

const Card = forwardRef<HTMLDivElement, Props>(({ title, color, children }, ref) => (
  <StyledCard ref={ref} color={color}>
    <StyledCardTitle color={color}>{title}</StyledCardTitle>
    {children}
  </StyledCard>
));

export default Card;
