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
    flex-wrap: wrap;
    gap: 2px;
`;

export const RemoveButton = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 20px;
    position: absolute;
    right: -7px;
    top: -7px;
    background: #ff4d4d;
    display: flex;
    align-items: center;
    justify-content: center;
`;
