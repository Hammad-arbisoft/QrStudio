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
}) => {
    return (
        <RowContainer>
            <ToolBarButtonWrapper gap={11}>
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
            />
            <OpacityPicker
                value={isElementShape(selectedElement) ? selectedElement?.opacity : shapeOpacity}
                onChangeOpacity={onChangeShapeOpacity}
            />
        </RowContainer>
    );
};

ShapeToolBar.propTypes = propTypes;
