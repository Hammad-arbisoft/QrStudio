import styled from 'styled-components';
import theme from '@/theme';

export const TabBarContainer = styled.div`
    border: 1px solid ${theme.color.gray_200};
    height: ${({ height }) => height}px;
    margin-right: ${({ marginRight = 0 }) => marginRight}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    overflow: hidden;
    background: ${theme.color.white};
`;

export const TabItem = styled.div`
    padding: ${({ tabPadding }) => tabPadding};
    cursor: pointer;
    border-right: ${({ isLast }) => (isLast ? 'none' : `1px solid ${theme.color.gray_200}`)};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
