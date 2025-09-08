import styled, { css } from 'styled-components';
import theme from '@/theme';

export const Wrapper = styled.span`
    position: relative;
    display: inline-flex;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const Floating = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    border-radius: 6px;
    /* wrapping */
    white-space: normal;
    word-break: break-word;
    overflow-wrap: anywhere;
    /* defaults (can be overridden via inline style in component) */
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[400]};
    pointer-events: none;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
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
