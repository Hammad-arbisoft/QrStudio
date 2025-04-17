import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { propTypes } from './props';
import { Container, EditorBox, InnerContainer, InnerContainerWrapper, Title } from './styled';
import { TopToolBar } from '../TopToolBar';
import { BottomToolBar } from '../BottomToolBar';
import { elementTypes, sideBarpillsList } from '@/constants';
import {
    Stage,
    Layer,
    Rect,
    Circle,
    Transformer,
    Arrow,
    RegularPolygon,
    Path,
    Star,
    Line,
    Group,
} from 'react-konva';
import { CanvasImage } from '../CanvasImage';
import theme from '@/theme';
import { QrElement } from '../QrElement';
import { EditableText } from '../EditableText';
import { debounce } from '@/utils';
import { useKonvaSnapping } from './util';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const Editor = ({
    selectedTab,
    translation,
    title = translation?.TITLE || TEXT_DICTIONARY?.TITLE,
    zoomPercentage,
    onChangeZoomPercentage,
    editorHeight,
    editorWidth,
    onSetBackgroundColor,
    elements,
    history,
    redoStack,
    onSetBackgroundImage,
    onUndo,
    onRedo,
    shapeStrokeColor,
    shapeStrokeWidth,
    shapeFillColor,
    onChangeShapeStrokeColor,
    onChangeShapeStrokeWidth,
    onChangeShapeFill,
    shapeOpacity,
    onChangeShapeOpacity,
    selectedElement,
    onSelectElement,
    stageRef,
    saveHistory,
    onChangeBackgroundImageOpacity,
    backgroundImageOpacity,
    onDeleteSelectedElement,
    onCopySelectedElement,
    onToggleLockElement,
    bringSelectedElementToFront,
    sendSelectedElementToBack,
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
    loadingImages,
    loadingFonts,
    uploadImageCallBack,
    setLoadingUploadImage,
}) => {
    const transformerRef = useRef(null);
    useEffect(() => {
        if (transformerRef?.current) {
            const selectedNode = stageRef?.current?.findOne(`#${selectedElement?.id}`);
            if (selectedNode) {
                transformerRef?.current.nodes([selectedNode]);
                transformerRef?.current.getLayer().batchDraw();
            } else {
                transformerRef?.current.nodes([]);
            }
        }
    }, [selectedElement]);
    const { handleDragging, handleDragEnd, handleResizing, handleResizeEnd } = useKonvaSnapping({
        guidelineColor: 'blue',
        guidelineDash: true,
        snapToStageCenter: true,
        snapRange: 5,
        guidelineThickness: 1,
        showGuidelines: true,
        snapToShapes: true,
        snapToStageBorders: true,
    });
    // console.error({ selectedElement });
    let canvasBackgroundColor = useMemo(() => {
        let backgroundColor;
        let backgroundIndex = elements?.findIndex(e => e?.type === elementTypes?.backgroundColor);

        if (backgroundIndex > -1) {
            backgroundColor = elements?.[backgroundIndex]?.color;
        }
        return backgroundColor;
    }, [elements]);

    let canvasBackgroundImage = useMemo(() => {
        let backgroundImage;

        let backgroundImageIndex = elements?.findIndex(
            e => e?.type === elementTypes?.backgroundImage,
        );
        if (backgroundImageIndex > -1) {
            backgroundImage = elements?.[backgroundImageIndex];
        }
        return backgroundImage;
    }, [elements]);

    const handleTransform = (id, newAttrs) => {
        let newAttributes = { ...newAttrs };
        delete newAttributes['ref'];
        const updatedElements = elements?.map(el =>
            el.id === id ? { ...el, ...newAttributes } : el,
        );
        saveHistory(updatedElements);
        onSelectElement({ ...newAttributes });
    };
    const handleSelect = elem => {
        onSelectElement(elem);
    };

    const debouncedTransform = debounce((id, attrs) => {
        const updatedElements = elements?.map(el =>
            el.id === id
                ? {
                      ...el,
                      ...attrs,
                  }
                : el,
        );
        saveHistory(updatedElements);
        onSelectElement({
            ...attrs,
        });
    }, 100);

    const debouncedChangeText = debounce(e => {
        onChangeTextProperty('text', e);
    }, 300);

    const handleTextTransform = (id, attrs) => {
        debouncedTransform(id, attrs);
    };

    const onChangeTextContent = e => {
        debouncedChangeText(e);
    };
    const renderElements = useCallback(
        el => {
            switch (el.type) {
                case elementTypes.circle:
                    return (
                        <Circle
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.square:
                    return (
                        <Rect
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.arrowRight:
                    return (
                        <Arrow
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.triangle:
                    return (
                        <RegularPolygon
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.heart:
                    return (
                        <Path
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.star:
                    return (
                        <Star
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.horizontalLine:
                    return (
                        <Line
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.verticalLine:
                    return (
                        <Line
                            key={el.id}
                            {...el}
                            id={el.id}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            strokeScaleEnabled={false}
                        />
                    );
                case elementTypes.image:
                    return (
                        <CanvasImage
                            key={el.id}
                            id={el.id}
                            element={{
                                ...el,
                            }}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                        />
                    );
                case elementTypes.qr:
                    return (
                        <QrElement
                            key={el.id}
                            element={el}
                            onClick={() => handleSelect(el)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onTransformEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                            }}
                            onDragMove={handleDragging}
                            translation={translation}
                            LogoTitle={translation?.LOGO || TEXT_DICTIONARY?.LOGO}
                        />
                    );
                case elementTypes.text:
                    return (
                        <EditableText
                            key={el.id}
                            element={el}
                            onClick={() => handleSelect(el)}
                            onTransform={e => handleTextTransform(el.id, e)}
                            onDragEnd={e => {
                                handleTransform(el.id, e.target.attrs);
                                handleDragEnd(e);
                            }}
                            onDragMove={handleDragging}
                            onChangeTextContent={onChangeTextContent}
                            onChangeTextProperty={onChangeTextProperty}
                        />
                    );
                default:
                    return null;
            }
        },
        [elements, selectedElement],
    );

    return (
        <Container selectedTab={selectedTab}>
            {selectedTab && selectedTab !== sideBarpillsList?.whiteLabel && (
                <TopToolBar
                    selectedTab={selectedTab}
                    onSetBackgroundColor={onSetBackgroundColor}
                    elements={elements}
                    canvasBackgroundColor={canvasBackgroundColor}
                    onSetBackgroundImage={onSetBackgroundImage}
                    canvasBackgroundImage={canvasBackgroundImage}
                    shapeStrokeColor={shapeStrokeColor}
                    shapeStrokeWidth={shapeStrokeWidth}
                    shapeFillColor={shapeFillColor}
                    onChangeShapeStrokeColor={onChangeShapeStrokeColor}
                    onChangeShapeStrokeWidth={onChangeShapeStrokeWidth}
                    onChangeShapeFill={onChangeShapeFill}
                    shapeOpacity={shapeOpacity}
                    onChangeShapeOpacity={onChangeShapeOpacity}
                    selectedElement={selectedElement}
                    onChangeBackgroundImageOpacity={onChangeBackgroundImageOpacity}
                    backgroundImageOpacity={backgroundImageOpacity}
                    imageStrokeWidth={imageStrokeWidth}
                    imageStrokeColor={imageStrokeColor}
                    imageOpacity={imageOpacity}
                    onChangeImageStrokeWidth={onChangeImageStrokeWidth}
                    onChangeImageStrokeColor={onChangeImageStrokeColor}
                    onChangeImageOpacity={onChangeImageOpacity}
                    qrStrokeWidth={qrStrokeWidth}
                    qrStrokeColor={qrStrokeColor}
                    qrOpacity={qrOpacity}
                    onChangeQrStrokeWidth={onChangeQrStrokeWidth}
                    onChangeQrStrokeColor={onChangeQrStrokeColor}
                    onChangeQrOpacity={onChangeQrOpacity}
                    defaultTextProps={defaultTextProps}
                    onChangeTextProperty={onChangeTextProperty}
                    onSetPageSize={onSetPageSize}
                    selectedPageSize={selectedPageSize}
                    translation={translation}
                    uploadImageCallBack={uploadImageCallBack}
                    setLoadingUploadImage={setLoadingUploadImage}
                />
            )}
            <InnerContainer>
                <InnerContainerWrapper editorHeight={editorHeight + 50} editorWidth={editorWidth}>
                    <Title>{title}</Title>
                    <EditorBox editorHeight={editorHeight} editorWidth={editorWidth}>
                        {!loadingImages && !loadingFonts && (
                            <Stage
                                width={editorWidth}
                                height={editorHeight}
                                ref={stageRef}
                                onMouseDown={e => {
                                    if (e.target === e.target.getStage()) {
                                        onSelectElement(null);
                                    }
                                }}
                            >
                                <Layer
                                    onClick={() => {
                                        onSelectElement(null);
                                    }}
                                >
                                    {canvasBackgroundColor && (
                                        <Rect
                                            width={editorWidth}
                                            height={editorHeight}
                                            fill={canvasBackgroundColor}
                                        />
                                    )}
                                    {canvasBackgroundImage && (
                                        <CanvasImage
                                            element={{
                                                ...canvasBackgroundImage,
                                                width: editorWidth,
                                                height: editorHeight,
                                            }}
                                        />
                                    )}
                                </Layer>
                                <Layer>
                                    <Group
                                        scaleX={zoomPercentage / 100}
                                        scaleY={zoomPercentage / 100}
                                    >
                                        {elements?.map(el => renderElements(el))}
                                        {selectedElement && (
                                            <Transformer
                                                ref={transformerRef}
                                                onTransform={handleResizing}
                                                onTransformEnd={handleResizeEnd}
                                                enabledAnchors={
                                                    selectedElement?.draggable
                                                        ? selectedElement?.type ===
                                                          elementTypes?.text
                                                            ? ['middle-left', 'middle-right']
                                                            : [
                                                                  'top-left',
                                                                  'top-right',
                                                                  'bottom-left',
                                                                  'bottom-right',
                                                                  'middle-left',
                                                                  'middle-right',
                                                                  'top-center',
                                                                  'bottom-center',
                                                              ]
                                                        : []
                                                }
                                                borderStroke={theme.color.primary}
                                                borderStrokeWidth={2}
                                                // add anchors
                                                anchorFill={theme.color.white}
                                                anchorStroke={theme.color.primary}
                                                anchorStrokeWidth={2}
                                                anchorSize={8}
                                                rotateEnabled={
                                                    selectedElement?.draggable ? true : false
                                                }
                                                // make all anchors look like circles
                                                // anchorCornerRadius={50}
                                                boundBoxFunc={(oldBox, newBox) => {
                                                    // limit resize
                                                    if (!selectedElement?.draggable) {
                                                        return oldBox;
                                                    }
                                                    return newBox;
                                                }}
                                            />
                                        )}
                                    </Group>
                                </Layer>
                            </Stage>
                        )}
                    </EditorBox>
                </InnerContainerWrapper>
            </InnerContainer>
            <BottomToolBar
                disableUndo={history.length === 0}
                disableRedo={redoStack.length === 0}
                selectedTab={selectedTab}
                zoomPercentage={zoomPercentage}
                onChangeZoomPercentage={onChangeZoomPercentage}
                onUndo={onUndo}
                onRedo={onRedo}
                selectedElement={selectedElement}
                onDeleteSelectedElement={onDeleteSelectedElement}
                onCopySelectedElement={onCopySelectedElement}
                onToggleLockElement={onToggleLockElement}
                bringSelectedElementToFront={bringSelectedElementToFront}
                sendSelectedElementToBack={sendSelectedElementToBack}
                translation={translation}
            />
        </Container>
    );
};

Editor.propTypes = propTypes;
