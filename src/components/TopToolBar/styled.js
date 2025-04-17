import theme from '@/theme';
import styled from 'styled-components';

export const ToolBarWrapper = styled.div`
    display: flex;
    padding: 10px 30px;
    align-items: center;
    border-bottom: 1px solid ${theme.color.gray_EAEAEA};
    background: ${theme.color.white};
    flex-direction: row;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    // pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    position: relative;
    // overflow: auto;
`;
export const OverlayBlocker = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.1);
    z-index: 100;
    cursor: not-allowed;
`;
