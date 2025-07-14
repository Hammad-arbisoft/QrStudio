import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { DropDown } from '../DropDown';
import { Label, RemoveButton, RowContainer } from './styled';
import {
    IconBackgroundColor,
    IconBackgroundImage,
    IconBackgroundImageOpacity,
    IconCross,
    IconDropDownSmall,
    IconFrame,
} from '@/assets';
import theme from '@/theme';
import { ColorBox } from '../ColorBox';
import { StyledImage } from '@/generic/Styled';
import { pickImage } from '@/utils';
import { OpacityPicker } from '../OpacityPicker';
import { pageSizes } from '@/constants/layoutConstants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';
import { StrokePicker } from '../StrokePicker';

export const TemplateToolBar = ({
    onSetBackgroundColor,
    canvasBackgroundColor,
    onSetBackgroundImage,
    backgroundImageOpacity,
    onChangeBackgroundImageOpacity,
    onSetPageSize,
    selectedPageSize,
    languageLocale,
    uploadImageCallBack,
    setLoadingUploadImage,
    cuttingGuideStroke,
    cuttingGuideStrokeColor,
    onChangeCuttingGuideProp,
    canvasBackgroundImage,
    onRemoveBackgroundImage,
}) => {
    const selectBackgroundColor = e => {
        onSetBackgroundColor(e);
    };
    const handleBackgroundUpload = async () => {
        const file = await pickImage();
        if (!file) return;
        if (uploadImageCallBack) {
            setLoadingUploadImage(true);
            const imageUrl = await uploadImageCallBack(file);
            onSetBackgroundImage(imageUrl);
            setLoadingUploadImage(false);
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                onSetBackgroundImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <RowContainer>
            <DropDown
                gap={20}
                left={<Label>{selectedPageSize}</Label>}
                list={Object.keys(pageSizes)}
                onSelect={e => {
                    onSetPageSize && onSetPageSize(e);
                }}
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.PAGE_SIZE}
            />
            <ToolBarButtonWrapper
                gap={11}
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.BACKGROUND_COLOR}
                tooltipPosition={'bottom'}
            >
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
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.BACKGROUND_IMAGE}
                tooltipPosition={'bottom'}
            >
                {canvasBackgroundImage && (
                    <RemoveButton
                        onClick={e => {
                            onRemoveBackgroundImage && onRemoveBackgroundImage();
                            e.stopPropagation();
                        }}
                    >
                        <StyledImage src={IconCross} height={15} width={15} />
                    </RemoveButton>
                )}
                <StyledImage
                    src={canvasBackgroundImage?.src || IconBackgroundImage}
                    height={24}
                    width={24}
                />
            </ToolBarButtonWrapper>
            <OpacityPicker
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.BACKGROUND_IMAGE_OPACITY}
                gap={10}
                value={backgroundImageOpacity}
                onChangeOpacity={onChangeBackgroundImageOpacity}
                leftChild={<StyledImage src={IconBackgroundImageOpacity} />}
                rightChild={<StyledImage src={IconDropDownSmall} />}
            />
            <StrokePicker
                gap={10}
                value={cuttingGuideStroke}
                onChangeStrokeWidth={e => {
                    onChangeCuttingGuideProp('cuttingGuideStroke', e);
                }}
                strokeColor={cuttingGuideStrokeColor}
                onChangeShapeStrokeColor={e => {
                    onChangeCuttingGuideProp('cuttingGuideStrokeColor', e);
                }}
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.CUTTING_GUIDE}
                languageLocale={languageLocale}
                leftIcon={IconFrame}
                max={10}
            />
        </RowContainer>
    );
};

TemplateToolBar.propTypes = propTypes;
