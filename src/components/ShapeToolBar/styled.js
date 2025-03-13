import theme from '@/theme';
import styled from 'styled-components';

export const Label = styled.p`
    color: ${theme.color.gray_700};
    font-size: 14px;
    font-weight: ${theme.fontWeights[400]};
    font-family: ${theme.fonts.primary};
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
