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
import { pickImage } from '@/utils';
import { OpacityPicker } from '../OpacityPicker';

export const TemplateToolBar = ({
    onSetBackgroundColor,
    canvasBackgroundColor,
    onSetBackgroundImage,
    backgroundImageOpacity,
    onChangeBackgroundImageOpacity,
}) => {
    const selectBackgroundColor = e => {
        onSetBackgroundColor(e);
    };
    const handleBackgroundUpload = async () => {
        const file = await pickImage();
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            onSetBackgroundImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <RowContainer>
            <DropDown gap={20} left={<Label>A4</Label>} />
            <ToolBarButtonWrapper gap={11}>
                <StyledImage src={IconBackgroundColor} />
                <ColorBox
                    backgroundColor={canvasBackgroundColor || theme.color.white}
                    onChange={selectBackgroundColor}
                />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={17}
                paddingLeft={17}
                onClick={handleBackgroundUpload}
            >
                <StyledImage src={IconBackgroundImage} />
            </ToolBarButtonWrapper>
            <OpacityPicker
                gap={10}
                value={backgroundImageOpacity}
                onChangeOpacity={onChangeBackgroundImageOpacity}
                leftChild={<StyledImage src={IconBackgroundImageOpacity} />}
                rightChild={<StyledImage src={IconDropDownSmall} />}
            />
            <ToolBarButtonWrapper gap={10}>
                <StyledImage src={IconFrame} />
                <StyledText fontFamily={theme.fonts.secondary}>10 mm</StyledText>
                <ColorBox backgroundColor={theme.color.gray_F2F2F2} />
            </ToolBarButtonWrapper>
        </RowContainer>
    );
};

TemplateToolBar.propTypes = propTypes;
