import { ReactNode } from 'react';
import {
  StyledLeftCard,
  StyledRightCard,
  StyledCardTitle,
} from '@/components/views/Hero/Profile/styles';

type Props = {
  title: string;
  color: string;
  isVisible: boolean;
  xOrigin?: 'left' | 'right';
  children: ReactNode;
};

const Card: React.FC<Props> = ({ title, color, isVisible, xOrigin = 'left', children }) => (
  <>
    {xOrigin === 'left' ? (
      <StyledLeftCard color={color} isVisible={isVisible}>
        <StyledCardTitle color={color}>{title}</StyledCardTitle>
        {children}
      </StyledLeftCard>
    ) : (
      <StyledRightCard color={color} isVisible={isVisible}>
        <StyledCardTitle color={color}>{title}</StyledCardTitle>
        {children}
      </StyledRightCard>
    )}
  </>
);

export default Card;
