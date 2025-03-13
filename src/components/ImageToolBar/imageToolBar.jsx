import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { RowContainer } from './styled';
import { IconGrid, IconLineColor, IconOpacity } from '@/assets';
import theme from '@/theme';
import { StyledImage, StyledText } from '@/generic/Styled';

export const ImageToolBar = () => {
    return (
        <RowContainer>
            <ToolBarButtonWrapper gap={12}>
                <StyledImage src={IconGrid} />
                <StyledText fontFamily={theme.fonts.secondary} marginRight={10}>
                    0
                </StyledText>
                <StyledImage src={IconLineColor} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper gap={12}>
                <StyledImage src={IconOpacity} />
                <StyledText fontFamily={theme.fonts.secondary}>100%</StyledText>
            </ToolBarButtonWrapper>
        </RowContainer>
    );
};

ImageToolBar.propTypes = propTypes;
