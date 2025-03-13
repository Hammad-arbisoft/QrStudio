import theme from '@/theme';
import styled from 'styled-components';

export const ToolBarWrapper = styled.div`
    display: flex;
    padding: 10px 30px;
    align-items: center;
    border-bottom: 1px solid ${theme.color.gray_EAEAEA};
    background: ${theme.color.white};
    flex-direction: row;
    overflow: auto;
`;
