import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { RowContainer } from './styled';
import { IconBackgroundColor, IconRoundedCorner } from '@/assets';
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
    languageLocale,
    onChangeCornerRadius,
}) => {
    return (
        <RowContainer>
            <ToolBarButtonWrapper
                gap={11}
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.SHAPE_FILL}
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
                languageLocale={languageLocale}
            />
            <OpacityPicker
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.SHAPE_OPACITY}
                value={isElementShape(selectedElement) ? selectedElement?.opacity : shapeOpacity}
                onChangeOpacity={onChangeShapeOpacity}
                languageLocale={languageLocale}
            />
            {selectedElement?.type === 'square' && (
                <OpacityPicker
                    tooltip={TEXT_DICTIONARY?.[languageLocale]?.CORNER_RADIUS || 'Corner Radius'}
                    value={selectedElement.cornerRadius || 0}
                    min={0}
                    max={50}
                    step={1}
                    varient="radius"
                    onChangeOpacity={onChangeCornerRadius}
                    languageLocale={languageLocale}
                    toolBarIcon={IconRoundedCorner}
                />
            )}
        </RowContainer>
    );
};

ShapeToolBar.propTypes = propTypes;
