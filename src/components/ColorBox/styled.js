import styled from 'styled-components';
import theme from '@/theme';

export const Box = styled.div`
    height: 22px;
    width: 22px;
    border-radius: 4px;
    border: 1px solid ${theme.color.gray_CCC};
    background-color: ${({ backgroundColor }) => backgroundColor || theme.color.gray_F2F2F2};
`;
