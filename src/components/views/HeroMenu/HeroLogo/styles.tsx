import styled from 'styled-components';
import { ease } from '@/helpers/theme';

export const StyledSvg = styled.svg<{ isHighlighted: boolean; isFaded: boolean }>`
  opacity: ${({ isFaded }) => isFaded && 0};
  overflow: visible;
  transition: all 0.9s ${ease.smooth};
  transform: ${({ isHighlighted, isFaded }) =>
    isHighlighted ? (isFaded ? 'scale(1.5)' : 'scale(1.15)') : 'scale(1)'};
`;

export const StyledPath = styled.path<{ isHighlighted: boolean; heroColor: string }>`
  fill: ${({ theme, isHighlighted, heroColor }) =>
    isHighlighted ? heroColor : theme.alphaDark_75};
  transition: fill 0.9s ${ease.smooth};
`;
