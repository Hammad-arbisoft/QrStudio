import theme from '@/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 18px;
    overflow: auto;
`;

export const ShapesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: flex-start;
`;

export const SingleItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    width: 71px;
    height: 71px;
    transition: background-color 0.1s ease;
    &:hover {
        background-color: ${theme.color.gray_F0F2F7};
    }
`;
