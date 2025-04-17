import React from 'react';
import { propTypes } from './props';
import { RowContainer } from './styled';
import { StrokePicker } from '../StrokePicker';
import { OpacityPicker } from '../OpacityPicker';
import { isElementOfSameType } from '@/utils';
import { elementTypes } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const ImageToolBar = ({
    imageStrokeWidth,
    imageStrokeColor,
    imageOpacity,
    onChangeImageStrokeWidth,
    onChangeImageStrokeColor,
    onChangeImageOpacity,
    selectedElement,
    translation,
}) => {
    return (
        <RowContainer>
            <StrokePicker
                value={
                    isElementOfSameType(selectedElement, elementTypes.image)
                        ? selectedElement?.strokeWidth
                        : imageStrokeWidth
                }
                onChangeStrokeWidth={onChangeImageStrokeWidth}
                strokeColor={
                    isElementOfSameType(selectedElement, elementTypes.image)
                        ? selectedElement?.stroke
                        : imageStrokeColor
                }
                onChangeShapeStrokeColor={onChangeImageStrokeColor}
                translation={translation}
            />
            <OpacityPicker
                tooltip={translation?.IMAGE_OPACITY || TEXT_DICTIONARY?.IMAGE_OPACITY}
                value={
                    isElementOfSameType(selectedElement, elementTypes.image)
                        ? selectedElement?.opacity
                        : imageOpacity
                }
                onChangeOpacity={onChangeImageOpacity}
            />
        </RowContainer>
    );
};

ImageToolBar.propTypes = propTypes;
