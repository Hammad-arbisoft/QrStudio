import React, { useCallback, useMemo, useRef, useState } from 'react';
import { propTypes } from './props';
import { StudioWrapper } from './styled';
import { Editor, HelperSideBar, SideBar } from '@/components';
import { calculatePercentageValue, isElementOfSameType, isElementShape } from '@/utils';
import { defaultCanvasSize } from '@/constants/layoutConstants';
import { defaultSideBarImagesList, elementTypes, sideBarpillsList } from '@/constants';
import theme from '@/theme';

export const Studio = ({ title = 'untitled' }) => {
    // const defaultImagesList = [IconTools, IconToolsPink];
    // const CustomImagesList = [ImageSampleLogo, ImageSampleLogo2];
    const stageRef = useRef(null);
    const [selectedTab, setSelectedTab] = useState(null);
    const [helperSideBarVisible, setHelperSideBarVisible] = useState(false);
    const [zoomPercentage, setZoomPercentage] = useState(80);
    const [canvasSize] = useState(defaultCanvasSize);
    const [elements, setElements] = useState([]);
    const [backgroundImageOpacity, setBackgroundImageOpacity] = useState(1);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);
    const [shapeFillColor, setShapeFillColor] = useState(theme.color.white);
    const [shapeStrokeWidth, setShapeStrokeWidth] = useState(1);
    const [shapeStrokeColor, setShapeStrokeColor] = useState(theme.color.black);
    const [shapeOpacity, setShapeOpacity] = useState(1);
    const [imageStrokeWidth, setImageStrokeWidth] = useState(0);
    const [imageStrokeColor, setImageStrokeColor] = useState(theme.color.black);
    const [imageOpacity, setImageOpacity] = useState(1);
    const [selectedElement, setSelectedElement] = useState(null);
    const [customImagesList, setCustomImagesList] = useState([]);

    const editorHeight = useMemo(() => {
        return calculatePercentageValue(canvasSize?.height, zoomPercentage);
    }, [zoomPercentage]);
    const editorWidth = useMemo(() => {
        return calculatePercentageValue(canvasSize?.width, zoomPercentage);
    }, [zoomPercentage]);

    const onSelectedTab = useCallback(
        tab => {
            setSelectedElement(null);
            setSelectedTab(tab);
            setHelperSideBarVisible(true);
        },
        [setSelectedTab],
    );

    const onCollapseHelperSideBar = useCallback(() => {
        setHelperSideBarVisible(false);
    }, [setHelperSideBarVisible]);

    const onChangeZoomPercentage = percentage => {
        setZoomPercentage(percentage);
    };

    const saveHistory = newElements => {
        setHistory([...history, elements]);
        setRedoStack([]);
        setElements(newElements);
    };

    const onSetBackgroundColor = color => {
        if (!color) {
            return;
        }
        let newElement;
        let elemClone = [...elements];
        let backgroundColorIndex = elemClone.findIndex(
            e => e?.type === elementTypes?.backgroundColor,
        );
        if (backgroundColorIndex > -1) {
            elemClone.splice(backgroundColorIndex, 1);
        }
        newElement = {
            type: elementTypes?.backgroundColor,
            id: `element${Date.now()}`,
            color: color,
        };

        saveHistory([...elemClone, newElement]);
    };

    const addElement = elem => {
        saveHistory([...elements, elem]);
        setSelectedElement(elem);
    };

    const addShape = type => {
        let shapeProps = {
            id: `element${Date.now()}`,
            x: editorWidth / 2 - 50,
            y: editorHeight / 2 - 50,
            fill: shapeFillColor,
            stroke: shapeStrokeColor,
            strokeWidth: shapeStrokeWidth,
            opacity: shapeOpacity,
            type: type,
            draggable: true,
        };
        if (type === elementTypes.circle) {
            shapeProps['radius'] = 70;
            shapeProps['x'] = editorWidth / 2;
            shapeProps['y'] = editorHeight / 2;
            addElement(shapeProps);
        } else if (type === elementTypes.square) {
            shapeProps['height'] = 100;
            shapeProps['width'] = 100;
            addElement(shapeProps);
        } else if (type === elementTypes.arrowRight) {
            shapeProps['points'] = [0, 0, 100, 0];
            shapeProps['pointerLength'] = 20;
            shapeProps['pointerWidth'] = 20;
            shapeProps['strokeWidth'] = 4;
            shapeProps['fill'] = shapeStrokeColor;
            addElement(shapeProps);
        } else if (type === elementTypes.triangle) {
            shapeProps['sides'] = 3;
            shapeProps['radius'] = 60;
            shapeProps['rotation'] = 0;
            shapeProps['x'] = editorWidth / 2;
            shapeProps['y'] = editorHeight / 2;
            addElement(shapeProps);
        } else if (type === elementTypes.heart) {
            shapeProps['data'] = `M 50,20 
            C 20,-10 -30,40 50,90 
            C 130,40 80,-10 50,20 Z`;
            shapeProps['scale'] = { x: 1, y: 1 };
            addElement(shapeProps);
        } else if (type === elementTypes.star) {
            shapeProps['numPoints'] = 5;
            shapeProps['innerRadius'] = 30;
            shapeProps['outerRadius'] = 70;
            shapeProps['x'] = editorWidth / 2;
            shapeProps['y'] = editorHeight / 2;
            addElement(shapeProps);
        } else if (type === elementTypes.horizontalLine) {
            const centerY = editorHeight / 2;
            shapeProps['points'] = [50, centerY, editorWidth - 50, centerY];
            shapeProps['x'] = 0;
            shapeProps['y'] = 0;
            shapeProps['strokeWidth'] = 4;

            addElement(shapeProps);
        } else if (type === elementTypes.verticalLine) {
            const centerX = editorWidth / 2;
            shapeProps['points'] = [centerX, 50, centerX, editorHeight - 50];
            shapeProps['x'] = 0;
            shapeProps['y'] = 0;
            shapeProps['strokeWidth'] = 4;

            addElement(shapeProps);
        }
        // console.error(type);
    };

    const onSetBackgroundImage = img => {
        let newElement;
        let elemClone = [...elements];
        let backgroundImageIndex = elemClone.findIndex(
            e => e?.type === elementTypes?.backgroundImage,
        );
        if (backgroundImageIndex > -1) {
            elemClone.splice(backgroundImageIndex, 1);
        }
        newElement = {
            type: elementTypes?.backgroundImage,
            id: `element${Date.now()}`,
            src: img,
            opacity: backgroundImageOpacity,
        };
        saveHistory([...elemClone, newElement]);
    };
    const onChangeBackgroundImageOpacity = val => {
        let backgroundImageIndex = elements.findIndex(
            e => e?.type === elementTypes?.backgroundImage,
        );
        if (backgroundImageIndex > -1) {
            const updatedElements = elements.map(el =>
                el.type === elementTypes?.backgroundImage ? { ...el, opacity: val } : el,
            );

            saveHistory(updatedElements);
        }
        setBackgroundImageOpacity(val);
    };

    const undo = useCallback(() => {
        if (history.length > 0) {
            // if (history.length === 1) {
            //     setSelectedElement(null);
            // }
            setSelectedElement(null);

            const previousState = history[history.length - 1];
            setRedoStack([elements, ...redoStack]);
            setHistory(history.slice(0, -1));
            setElements(previousState);
        }
    }, [history, elements, redoStack, setRedoStack, setHistory, setElements]);

    const redo = useCallback(() => {
        if (redoStack.length > 0) {
            setSelectedElement(null);

            const nextState = redoStack[0];
            setHistory([...history, elements]);
            setRedoStack(redoStack.slice(1));
            setElements(nextState);
        }
    }, [history, elements, redoStack, setHistory, setRedoStack, setElements]);

    const onSelectElement = element => {
        if (isElementShape(element)) {
            setSelectedTab(sideBarpillsList?.shape);
        } else if (isElementOfSameType(element, elementTypes?.image)) {
            setSelectedTab(sideBarpillsList?.image);
        }
        if (element) {
            setSelectedElement({ ...element });
            setHelperSideBarVisible(true);
        } else {
            setSelectedElement(null);
        }
    };

    const changeSelectedElementProperty = (key, value) => {
        let selectedElementCopy = { ...selectedElement };
        selectedElementCopy[key] = value;
        const updatedElements = elements.map(el =>
            el.id === selectedElementCopy?.id ? { ...selectedElementCopy } : el,
        );
        saveHistory(updatedElements);
        setSelectedElement(selectedElementCopy);
    };

    const onChangeShapeFill = e => {
        if (selectedElement && isElementShape(selectedElement)) {
            changeSelectedElementProperty('fill', e);
        } else {
            setShapeFillColor(e);
        }
    };

    const onChangeShapeStrokeWidth = e => {
        if (selectedElement && isElementShape(selectedElement)) {
            changeSelectedElementProperty('strokeWidth', e);
        } else {
            setShapeStrokeWidth(e);
        }
    };

    const onChangeShapeStrokeColor = e => {
        if (selectedElement && isElementShape(selectedElement)) {
            changeSelectedElementProperty('stroke', e);
        } else {
            setShapeStrokeColor(e);
        }
    };

    const onChangeShapeOpacity = e => {
        if (selectedElement && isElementShape(selectedElement)) {
            changeSelectedElementProperty('opacity', e);
        } else {
            setShapeOpacity(e);
        }
    };
    const onDeleteSelectedElement = () => {
        let index = elements.findIndex(e => e?.id === selectedElement?.id);
        if (index < 0) {
            return;
        }
        let copy = [...elements];
        copy.splice(index, 1);
        setSelectedElement(null);
        saveHistory([...copy]);
    };
    const onCopySelectedElement = () => {
        let copyElement = { ...selectedElement };
        copyElement['id'] = `element${Date.now()}`;
        copyElement['x'] = selectedElement?.x + 10;
        copyElement['y'] = selectedElement?.y + 10;
        copyElement['draggable'] = true;

        addElement(copyElement);
    };
    const onToggleLockElement = () => {
        changeSelectedElementProperty('draggable', !selectedElement?.draggable);
        // setSelectedElement(null);
    };
    const bringSelectedElementToFront = () => {
        let copyElements = [...elements];
        const index = copyElements.findIndex(elem => elem.id === selectedElement?.id);
        if (index === -1) {
            return;
        }
        const [selectedElem] = copyElements.splice(index, 1);
        copyElements.push(selectedElem);
        saveHistory([...copyElements]);
    };

    const sendSelectedElementToBack = () => {
        let copyElements = [...elements];
        const index = copyElements.findIndex(elem => elem.id === selectedElement?.id);
        if (index === -1) {
            return;
        }
        const [selectedElem] = copyElements.splice(index, 1);
        copyElements.unshift(selectedElem);
        saveHistory([...copyElements]);
    };
    const onChangeImageStrokeWidth = e => {
        if (isElementOfSameType(selectedElement, elementTypes?.image)) {
            changeSelectedElementProperty('strokeWidth', e);
        } else {
            setImageStrokeWidth(e);
        }
    };

    const onChangeImageStrokeColor = e => {
        if (isElementOfSameType(selectedElement, elementTypes?.image)) {
            changeSelectedElementProperty('stroke', e);
        } else {
            setImageStrokeColor(e);
        }
    };

    const onChangeImageOpacity = e => {
        if (isElementOfSameType(selectedElement, elementTypes?.image)) {
            changeSelectedElementProperty('opacity', e);
        } else {
            setImageOpacity(e);
        }
    };

    const addCustomImageToList = img => {
        setCustomImagesList([...customImagesList, img]);
    };

    const addImageToCanvas = img => {
        let imgProps = {
            id: `element${Date.now()}`,
            x: editorWidth / 2 - 50,
            y: editorHeight / 2 - 50,
            stroke: imageStrokeColor,
            strokeWidth: imageStrokeWidth,
            opacity: imageOpacity,
            type: elementTypes.image,
            draggable: true,
            // width: 100,
            // height: 100,
            src: img,
        };
        addElement(imgProps);
    };

    // console.error({ elements, history, redoStack });

    return (
        <StudioWrapper>
            <SideBar selectedSideBarItem={selectedTab} onClickPill={onSelectedTab} />
            <HelperSideBar
                selectedSideBarItem={selectedTab}
                onCollapse={onCollapseHelperSideBar}
                helperSideBarVisible={helperSideBarVisible}
                onAddShape={addShape}
                defaultImagesList={defaultSideBarImagesList}
                customImagesList={customImagesList}
                onAddCustomImageToList={addCustomImageToList}
                onAddImageToCanvas={addImageToCanvas}
            />
            <Editor
                canvasSize={canvasSize}
                editorHeight={editorHeight}
                editorWidth={editorWidth}
                selectedTab={selectedTab}
                title={title}
                zoomPercentage={zoomPercentage}
                onChangeZoomPercentage={onChangeZoomPercentage}
                onSetBackgroundColor={onSetBackgroundColor}
                elements={elements}
                history={history}
                redoStack={redoStack}
                onSetBackgroundImage={onSetBackgroundImage}
                onUndo={undo}
                onRedo={redo}
                shapeStrokeColor={shapeStrokeColor}
                shapeStrokeWidth={shapeStrokeWidth}
                shapeFillColor={shapeFillColor}
                imageStrokeWidth={imageStrokeWidth}
                imageStrokeColor={imageStrokeColor}
                imageOpacity={imageOpacity}
                onChangeImageStrokeWidth={onChangeImageStrokeWidth}
                onChangeImageStrokeColor={onChangeImageStrokeColor}
                onChangeImageOpacity={onChangeImageOpacity}
                onChangeShapeStrokeColor={onChangeShapeStrokeColor}
                onChangeShapeStrokeWidth={onChangeShapeStrokeWidth}
                onChangeShapeFill={onChangeShapeFill}
                shapeOpacity={shapeOpacity}
                onChangeShapeOpacity={onChangeShapeOpacity}
                selectedElement={selectedElement}
                onSelectElement={onSelectElement}
                stageRef={stageRef}
                saveHistory={saveHistory}
                onChangeBackgroundImageOpacity={onChangeBackgroundImageOpacity}
                backgroundImageOpacity={
                    elements.find(e => e?.type === elementTypes?.backgroundImage)?.opacity ||
                    backgroundImageOpacity
                }
                onDeleteSelectedElement={onDeleteSelectedElement}
                onCopySelectedElement={onCopySelectedElement}
                onToggleLockElement={onToggleLockElement}
                bringSelectedElementToFront={bringSelectedElementToFront}
                sendSelectedElementToBack={sendSelectedElementToBack}
            />
        </StudioWrapper>
    );
};

Studio.propTypes = propTypes;
