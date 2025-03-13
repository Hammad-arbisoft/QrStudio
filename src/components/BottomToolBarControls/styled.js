import styled from 'styled-components';
import theme from '@/theme';

export const ToolBarContainer = styled.div`
    display: flex;
    padding: 12px 24px;
    background: ${theme.color.gray_FDFCFC};
    gap: 15px;
    border-radius: 10px 10px 0px 0px;
    border: 1px solid ${theme.color.gray_EDEDED};
    border-bottom: none;
    align-items: center;
`;
