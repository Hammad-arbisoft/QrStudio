import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { RowContainer } from './styled';
import { IconBackgroundColor } from '@/assets';
import { StyledImage } from '@/generic/Styled';
import { ColorBox } from '../ColorBox';
import { isElementShape } from '@/utils';
import { StrokePicker } from '../StrokePicker';
import { OpacityPicker } from '../OpacityPicker';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const ShapeToolBar = ({
    shapeStrokeColor,
    shapeStrokeWidth,
    shapeFillColor,
    shapeOpacity,
    onChangeShapeStrokeColor,
    onChangeShapeStrokeWidth,
    onChangeShapeFill,
    onChangeShapeOpacity,
    selectedElement,
    translation,
}) => {
    return (
        <RowContainer>
            <ToolBarButtonWrapper
                gap={11}
                tooltip={translation?.SHAPE_FILL || TEXT_DICTIONARY?.SHAPE_FILL}
                tooltipPosition="bottom"
            >
                <StyledImage src={IconBackgroundColor} />
                <ColorBox
                    backgroundColor={
                        (isElementShape(selectedElement) && selectedElement?.fill) || shapeFillColor
                    }
                    onChange={onChangeShapeFill}
                />
            </ToolBarButtonWrapper>
            <StrokePicker
                value={
                    isElementShape(selectedElement)
                        ? selectedElement?.strokeWidth
                        : shapeStrokeWidth
                }
                onChangeStrokeWidth={onChangeShapeStrokeWidth}
                strokeColor={
                    isElementShape(selectedElement) ? selectedElement?.stroke : shapeStrokeColor
                }
                onChangeShapeStrokeColor={onChangeShapeStrokeColor}
                translation={translation}
            />
            <OpacityPicker
                tooltip={translation?.SHAPE_OPACITY || TEXT_DICTIONARY?.SHAPE_OPACITY}
                value={isElementShape(selectedElement) ? selectedElement?.opacity : shapeOpacity}
                onChangeOpacity={onChangeShapeOpacity}
            />
        </RowContainer>
    );
};

ShapeToolBar.propTypes = propTypes;
