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
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
    // overflow: auto;
`;
