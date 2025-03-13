import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div``;

export const ZoomControlWrapper = styled.div`
    border: 1px solid ${theme.color.gray_200};
    border-radius: 6px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: white;
`;

export const ZoomButton = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 14px;
    cursor: pointer;
`;

export const Divider = styled.div`
    width: 1px;
    height: 80%;
    background: rgba(77, 98, 119, 0.2);
`;

export const ZoomPercentage = styled.p`
    padding: 0 14px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[500]};
    color: ${theme.color.icon_gray};
`;
