import { ButtonVarients } from '@/constants';
import theme from '@/theme';
import styled from 'styled-components';

export const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid ${theme.color.primary};
    cursor: pointer;
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    background: ${({ varient }) =>
        varient === ButtonVarients.primary ? theme.color.primary : theme.color.white};
`;

export const IconWrapper = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
