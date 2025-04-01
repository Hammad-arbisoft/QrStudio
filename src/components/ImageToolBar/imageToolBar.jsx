import React from 'react';
import { propTypes } from './props';
import { RowContainer } from './styled';
import { StrokePicker } from '../StrokePicker';
import { OpacityPicker } from '../OpacityPicker';
import { isElementOfSameType } from '@/utils';
import { elementTypes } from '@/constants';

export const ImageToolBar = ({
    imageStrokeWidth,
    imageStrokeColor,
    imageOpacity,
    onChangeImageStrokeWidth,
    onChangeImageStrokeColor,
    onChangeImageOpacity,
    selectedElement,
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
            />
            <OpacityPicker
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
