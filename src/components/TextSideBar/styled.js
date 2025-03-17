import theme from '@/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 18px;
    overflow: auto;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemWrapper = styled.div`
    margin-bottom: 18px;
    cursor: pointer;
    transition: background-color 0.1s ease;
    padding: 5px;
    &:hover {
        background-color: ${theme.color.gray_F0F2F7};
    }
`;
