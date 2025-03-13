import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { DropDown } from '../DropDown';
import { Label, RowContainer } from './styled';
import {
    IconBackgroundColor,
    IconBackgroundImage,
    IconBackgroundImageOpacity,
    IconDropDownSmall,
    IconFrame,
} from '@/assets';
import theme from '@/theme';
import { ColorBox } from '../ColorBox';
import { StyledImage, StyledText } from '@/generic/Styled';

export const TemplateToolBar = () => (
    <RowContainer>
        <DropDown gap={20} left={<Label>A4</Label>} />
        <ToolBarButtonWrapper gap={11}>
            <StyledImage src={IconBackgroundColor} />
            <ColorBox backgroundColor={theme.color.gray_F2F2F2} />
        </ToolBarButtonWrapper>
        <ToolBarButtonWrapper paddingRight={17} paddingLeft={17}>
            <StyledImage src={IconBackgroundImage} />
        </ToolBarButtonWrapper>
        <ToolBarButtonWrapper gap={10}>
            <StyledImage src={IconBackgroundImageOpacity} />
            <StyledText fontFamily={theme.fonts.secondary}>100%</StyledText>
            <StyledImage src={IconDropDownSmall} />
        </ToolBarButtonWrapper>
        <ToolBarButtonWrapper gap={10}>
            <StyledImage src={IconFrame} />
            <StyledText fontFamily={theme.fonts.secondary}>10 mm</StyledText>
            <ColorBox backgroundColor={theme.color.gray_F2F2F2} />
        </ToolBarButtonWrapper>
    </RowContainer>
);

TemplateToolBar.propTypes = propTypes;
