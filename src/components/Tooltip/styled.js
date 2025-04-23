import theme from '@/theme';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const TooltipText = styled.div`
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 4px 10px;
    border-radius: 4px;
    position: absolute;
    z-index: 9999;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.1s;
    font-size: 13px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[400]};

    ${({ position }) =>
        position === 'top' &&
        css`
            bottom: 110%;
            left: 50%;
            transform: translateX(-50%);
        `}
    ${({ position }) =>
        position === 'right' &&
        css`
            top: 50%;
            left: 105%;
            transform: translateY(-50%);
        `}
  ${({ position }) =>
        position === 'bottom' &&
        css`
            top: 110%;
            left: 50%;
            transform: translateX(-50%);
        `}
  ${({ position }) =>
        position === 'left' &&
        css`
            top: 50%;
            right: 105%;
            transform: translateY(-50%);
        `}

  ${Wrapper}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;
