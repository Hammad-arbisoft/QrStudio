import React from 'react';
import { propTypes } from './props';
import { ToolBarWrapper } from './styled';
import { TemplateToolBar } from '../TemplateToolBar';
import { TextToolBar } from '../TextToolBar';
import { sideBarpillsList } from '@/constants';
import { ImageToolBar } from '../ImageToolBar';
import { ShapeToolBar } from '../ShapeToolBar';
import { QrToolBar } from '../QrToolBar';

export const TopToolBar = ({
    selectedTab,
    onSetBackgroundColor,
    canvasBackgroundColor,
    canvasBackgroundImage,
    onSetBackgroundImage,
    shapeStrokeColor,
    shapeStrokeWidth,
    shapeFillColor,
    shapeOpacity,
    onChangeShapeStrokeColor,
    onChangeShapeStrokeWidth,
    onChangeShapeFill,
    onChangeShapeOpacity,
    selectedElement,
    onChangeBackgroundImageOpacity,
    backgroundImageOpacity,
    imageStrokeWidth,
    imageStrokeColor,
    imageOpacity,
    onChangeImageStrokeWidth,
    onChangeImageStrokeColor,
    onChangeImageOpacity,
}) => {
    return (
        <ToolBarWrapper disabled={selectedElement && !selectedElement?.draggable}>
            {selectedTab === sideBarpillsList?.template ? (
                <TemplateToolBar
                    onSetBackgroundColor={onSetBackgroundColor}
                    canvasBackgroundColor={canvasBackgroundColor}
                    canvasBackgroundImage={canvasBackgroundImage}
                    onSetBackgroundImage={onSetBackgroundImage}
                    onChangeBackgroundImageOpacity={onChangeBackgroundImageOpacity}
                    backgroundImageOpacity={backgroundImageOpacity}
                />
            ) : selectedTab === sideBarpillsList?.text ? (
                <TextToolBar />
            ) : selectedTab === sideBarpillsList?.image ? (
                <ImageToolBar
                    imageStrokeWidth={imageStrokeWidth}
                    imageStrokeColor={imageStrokeColor}
                    imageOpacity={imageOpacity}
                    onChangeImageStrokeWidth={onChangeImageStrokeWidth}
                    onChangeImageStrokeColor={onChangeImageStrokeColor}
                    onChangeImageOpacity={onChangeImageOpacity}
                    selectedElement={selectedElement}
                />
            ) : selectedTab === sideBarpillsList?.shape ? (
                <ShapeToolBar
                    shapeStrokeColor={shapeStrokeColor}
                    shapeStrokeWidth={shapeStrokeWidth}
                    shapeFillColor={shapeFillColor}
                    onChangeShapeStrokeColor={onChangeShapeStrokeColor}
                    onChangeShapeStrokeWidth={onChangeShapeStrokeWidth}
                    onChangeShapeFill={onChangeShapeFill}
                    shapeOpacity={shapeOpacity}
                    onChangeShapeOpacity={onChangeShapeOpacity}
                    selectedElement={selectedElement}
                />
            ) : selectedTab === sideBarpillsList?.qr ? (
                <QrToolBar />
            ) : null}
        </ToolBarWrapper>
    );
};

TopToolBar.propTypes = propTypes;
