import theme from '@/theme';
import styled from 'styled-components';

export const Container = styled.div`
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 17px;
    background: ${theme.color.gray_FBFBFB};
    border-bottom: 1px solid ${theme.color.gray_EDEDED};
`;

export const IconWrapper = styled.div`
    height: 100%;
    padding: 0px 17px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
