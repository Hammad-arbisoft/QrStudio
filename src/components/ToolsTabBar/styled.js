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
    background: ${theme.color.white};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;

export const TabItem = styled.div`
    padding: ${({ tabPadding }) => tabPadding};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    border-right: ${({ isLast }) => (isLast ? 'none' : `1px solid ${theme.color.gray_200}`)};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    background: ${({ selected = false }) => (selected ? theme.color.gray_200 : theme.color.white)};
    border-top-left-radius: ${({ isFirst }) => (isFirst ? '5' : '0')}px;
    border-bottom-left-radius: ${({ isFirst }) => (isFirst ? '5' : '0')}px;
    border-top-right-radius: ${({ isLast }) => (isLast ? '5' : '0')}px;
    border-bottom-right-radius: ${({ isLast }) => (isLast ? '5' : '0')}px;
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;
