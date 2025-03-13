import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { RowContainer } from './styled';
import { IconBackgroundColor, IconGrid, IconLineColor, IconOpacity } from '@/assets';
import theme from '@/theme';
import { StyledImage, StyledText } from '@/generic/Styled';
import { ColorBox } from '../ColorBox';

export const ShapeToolBar = () => {
    return (
        <RowContainer>
            <ToolBarButtonWrapper gap={11}>
                <StyledImage src={IconBackgroundColor} />
                <ColorBox backgroundColor={theme.color.black} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper gap={12}>
                <StyledImage src={IconGrid} />
                <StyledText fontFamily={theme.fonts.secondary} marginRight={10}>
                    1
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

ShapeToolBar.propTypes = propTypes;
