import theme from '@/theme';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid ${theme.color.gray_200};
    border-radius: 8px;
    background-color: ${theme.color.white};
    height: ${({ height = 40 }) => `${height}px`};
    margin-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};
    margin-right: ${({ marginRight = 12 }) => `${marginRight}px`};
    display: flex;
    align-items: center;
    justify-content: ${({ justifyContent = 'center' }) => justifyContent};
    padding-top: ${({ paddingTop = 0 }) => `${paddingTop}px`};
    padding-right: ${({ paddingRight = 10 }) => `${paddingRight}px`};
    padding-bottom: ${({ paddingBottom = 0 }) => `${paddingBottom}px`};
    padding-left: ${({ paddingLeft = 10 }) => `${paddingLeft}px`};
    cursor: pointer;
    gap: ${({ gap = 0 }) => `${gap}px`};
`;
