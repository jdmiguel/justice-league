import styled from 'styled-components';
import { ease } from '@/helpers/theme';

export const StyledSvg = styled.svg<{ isHighlighted: boolean }>`
  overflow: visible;
  transition: transform 0.9s ${ease.smooth};
  transform: ${({ isHighlighted }) => (isHighlighted ? 'scale(1.15)' : 'scale(1)')};
`;

export const StyledPath = styled.path<{ isHighlighted: boolean; heroColor: string }>`
  fill: ${({ theme, isHighlighted, heroColor }) =>
    isHighlighted ? heroColor : theme.alphaDark_75};
  transition: fill 0.9s ${ease.smooth};
`;
