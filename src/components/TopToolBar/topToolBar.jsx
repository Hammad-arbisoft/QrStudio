import React from 'react';
import { propTypes } from './props';
import { OverlayBlocker, ToolBarWrapper } from './styled';
import { TemplateToolBar } from '../TemplateToolBar';
import { TextToolBar } from '../TextToolBar';
import { elementTypes, sideBarpillsList } from '@/constants';
import { ImageToolBar } from '../ImageToolBar';
import { ShapeToolBar } from '../ShapeToolBar';
import { QrToolBar } from '../QrToolBar';
import { isElementOfSameType } from '@/utils';

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
    qrStrokeWidth,
    qrStrokeColor,
    qrOpacity,
    onChangeQrStrokeWidth,
    onChangeQrStrokeColor,
    onChangeQrOpacity,
    defaultTextProps,
    onChangeTextProperty,
    onSetPageSize,
    selectedPageSize,
    translation,
    uploadImageCallBack,
    setLoadingUploadImage,
    cuttingGuideStroke,
    cuttingGuideStrokeColor,
    onChangeCuttingGuideProp,
}) => {
    return (
        <ToolBarWrapper disabled={selectedElement && !selectedElement?.draggable}>
            {selectedElement && !selectedElement?.draggable && (
                <OverlayBlocker
                    onClick={e => {
                        e?.stopPropagation();
                    }}
                />
            )}
            {selectedTab === sideBarpillsList?.template ? (
                <TemplateToolBar
                    onSetBackgroundColor={onSetBackgroundColor}
                    canvasBackgroundColor={canvasBackgroundColor}
                    canvasBackgroundImage={canvasBackgroundImage}
                    onSetBackgroundImage={onSetBackgroundImage}
                    onChangeBackgroundImageOpacity={onChangeBackgroundImageOpacity}
                    backgroundImageOpacity={backgroundImageOpacity}
                    onSetPageSize={onSetPageSize}
                    selectedPageSize={selectedPageSize}
                    translation={translation}
                    uploadImageCallBack={uploadImageCallBack}
                    setLoadingUploadImage={setLoadingUploadImage}
                    cuttingGuideStroke={cuttingGuideStroke}
                    cuttingGuideStrokeColor={cuttingGuideStrokeColor}
                    onChangeCuttingGuideProp={onChangeCuttingGuideProp}
                />
            ) : selectedTab === sideBarpillsList?.text ? (
                <TextToolBar
                    fontFamily={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.fontFamily
                            : defaultTextProps?.fontFamily
                    }
                    fontSize={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.fontSize
                            : defaultTextProps?.fontSize
                    }
                    color={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.color
                            : defaultTextProps?.color
                    }
                    textDecoration={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.textDecoration
                            : defaultTextProps?.textDecoration
                    }
                    fontStyle={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.fontStyle
                            : defaultTextProps?.fontStyle
                    }
                    fontWeight={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.fontWeight
                            : defaultTextProps?.fontWeight
                    }
                    textAlign={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.textAlign
                            : defaultTextProps?.textAlign
                    }
                    selectedElement={selectedElement}
                    textOpacity={
                        isElementOfSameType(selectedElement, elementTypes.text)
                            ? selectedElement?.opacity
                            : defaultTextProps?.opacity
                    }
                    onChangeTextProperty={onChangeTextProperty}
                    translation={translation}
                />
            ) : selectedTab === sideBarpillsList?.image ? (
                <ImageToolBar
                    imageStrokeWidth={imageStrokeWidth}
                    imageStrokeColor={imageStrokeColor}
                    imageOpacity={imageOpacity}
                    onChangeImageStrokeWidth={onChangeImageStrokeWidth}
                    onChangeImageStrokeColor={onChangeImageStrokeColor}
                    onChangeImageOpacity={onChangeImageOpacity}
                    selectedElement={selectedElement}
                    translation={translation}
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
                    translation={translation}
                />
            ) : selectedTab === sideBarpillsList?.qr ? (
                <QrToolBar
                    qrStrokeWidth={qrStrokeWidth}
                    qrStrokeColor={qrStrokeColor}
                    qrOpacity={qrOpacity}
                    onChangeQrStrokeWidth={onChangeQrStrokeWidth}
                    onChangeQrStrokeColor={onChangeQrStrokeColor}
                    onChangeQrOpacity={onChangeQrOpacity}
                    selectedElement={selectedElement}
                    translation={translation}
                />
            ) : null}
        </ToolBarWrapper>
    );
};

TopToolBar.propTypes = propTypes;
