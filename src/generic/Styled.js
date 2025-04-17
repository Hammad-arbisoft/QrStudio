import theme from '@/theme';
import styled from 'styled-components';

export const StyledImage = styled.img`
    width: ${({ width }) => width + 'px' || 'auto'};
    height: ${({ height }) => height + 'px' || 'auto'};
    max-width: ${({ maxWidth }) => maxWidth + 'px' || 'auto'};
    max-height: ${({ maxHeight }) => maxHeight + 'px' || 'auto'};
    object-fit: ${({ objectFit }) => objectFit || 'contain'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
    margin-right: ${({ marginRight = 0 }) => `${marginRight}px`};
    margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
    margin-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};
    padding-top: ${({ paddingTop = 0 }) => `${paddingTop}px`};
    padding-right: ${({ paddingRight = 0 }) => `${paddingRight}px`};
    padding-bottom: ${({ paddingBottom = 0 }) => `${paddingBottom}px`};
    padding-left: ${({ paddingLeft = 0 }) => `${paddingLeft}px`};
    border-radius: ${({ borderRadius = 0 }) => `${borderRadius}px`};
`;
export const StyledText = styled.p`
    font-family: ${({ fontFamily }) => fontFamily || theme.fonts.primary};
    font-size: ${({ fontSize = 14 }) => `${fontSize}px`};
    color: ${({ color }) => color || theme.color.gray_700};
    font-weight: ${({ fontWeight = 400 }) => fontWeight};
    line-height: ${({ lineHeight }) => lineHeight || 'normal'};
    text-align: ${({ textAlign }) => textAlign || 'left'};
    margin-top: ${({ marginTop = 0 }) => `${marginTop}px`};
    margin-right: ${({ marginRight = 0 }) => `${marginRight}px`};
    margin-bottom: ${({ marginBottom = 0 }) => `${marginBottom}px`};
    margin-left: ${({ marginLeft = 0 }) => `${marginLeft}px`};
    padding-top: ${({ paddingTop = 0 }) => `${paddingTop}px`};
    padding-right: ${({ paddingRight = 0 }) => `${paddingRight}px`};
    padding-bottom: ${({ paddingBottom = 0 }) => `${paddingBottom}px`};
    padding-left: ${({ paddingLeft = 0 }) => `${paddingLeft}px`};
`;
