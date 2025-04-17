import React from 'react';
import { propTypes } from './props';
import { RowContainer } from './styled';
import { StrokePicker } from '../StrokePicker';
import { OpacityPicker } from '../OpacityPicker';
import { elementTypes } from '@/constants';
import { isElementOfSameType } from '@/utils';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const QrToolBar = ({
    qrStrokeWidth,
    qrStrokeColor,
    qrOpacity,
    onChangeQrStrokeWidth,
    onChangeQrStrokeColor,
    onChangeQrOpacity,
    selectedElement,
    translation,
}) => {
    return (
        <RowContainer>
            <StrokePicker
                value={
                    isElementOfSameType(selectedElement, elementTypes.qr)
                        ? selectedElement?.strokeWidth
                        : qrStrokeWidth
                }
                onChangeStrokeWidth={onChangeQrStrokeWidth}
                strokeColor={
                    isElementOfSameType(selectedElement, elementTypes.qr)
                        ? selectedElement?.stroke
                        : qrStrokeColor
                }
                onChangeShapeStrokeColor={onChangeQrStrokeColor}
                translation={translation}
            />
            <OpacityPicker
                value={
                    isElementOfSameType(selectedElement, elementTypes.qr)
                        ? selectedElement?.opacity
                        : qrOpacity
                }
                onChangeOpacity={onChangeQrOpacity}
                tooltip={translation?.OPACITY || TEXT_DICTIONARY?.OPACITY}
            />
        </RowContainer>
    );
};

QrToolBar.propTypes = propTypes;
