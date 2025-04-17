import styled from 'styled-components';
import theme from '@/theme';

export const Box = styled.input.attrs({ type: 'color' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 4px;
    border: 1px solid ${theme.color.gray_CCC};
    padding: 0;
    cursor: pointer;
    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
    }

    &::-moz-color-swatch {
        border: none;
        border-radius: 4px;
    }
`;
