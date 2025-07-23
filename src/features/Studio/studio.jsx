/* eslint-disable max-len */
/* eslint-disable no-console */
import React, {
    useCallback,
    useMemo,
    useRef,
    useState,
    useEffect,
    forwardRef,
    useImperativeHandle,
} from 'react';
import { propTypes } from './props';
import { StudioWrapper } from './styled';
import { Editor, HelperSideBar, LoadingSpinner, Overlay, SideBar } from '@/components';
import {
    calculatePercentageValue,
    exportStageAsImage,
    isElementOfSameType,
    isElementShape,
    loadAllGoogleFonts,
    pickImage,
    preloadRelevantImages,
    removeImageProperty,
    validateLocale,
} from '@/utils';
import { pageSizes, pageSizesDimensions } from '@/constants/layoutConstants';
import {
    basicTextProps,
    defaultElements,
    defaultSideBarImagesList,
    elementTypes,
    sideBarpillsList,
} from '@/constants';
import theme from '@/theme';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
/**
 * @typedef {Object} StudioProps
 * @property {string} [title]
 * @property {string} [defaultQrLogo]
 * @property {string} [languageLocale]
 * @property {Array} [elementsList]
 * @property {Array} [customImages]
 * @property {Array} [defaultImages]
 * @property {boolean} [disableWhiteLabel]
 * @property {Array} [defaultTemplatesList]
 * @property {Array} [customTemplatesList]
 * @property {string} [qrLink]
 * @property {Object} [styleProps]
 * @property {string} [defaultText]
 * @property {Function} onSave
 * @property {string} [saveButtonText]
 * @property {'en'|'ru'|'pl'|'de'|'es'|'fr'|'it'} [locale]
 * @property {Function} [onCreateNewTemplate] - called when user creates a new template, passes new canvas elements
 * @property {Function} [onTemplateSelect] - called when a template is selected, passes template id
 * @property {Function} [uploadQRLogoImage] - Optional callback to upload the QR logo image. Should return a string or an object with `{ url }`
 * @property {number} [zoomLevel] - Optional zoom level (e.g. 100 for 100%)
 * @property {boolean} [showBackgroundImagePicker] - Used to set background image on entire canvas
 * @property {boolean} [showOpacityPicker] - Related to showBackgroundImagePicker and it's opacity
 */

/**
 * @type {React.ForwardRefExoticComponent<StudioProps & React.RefAttributes<HTMLDivElement>>}
 */
export const Studio = forwardRef(
    (
        {
            title = '',
            defaultQrLogo = null,
            elementsList = defaultElements,
            uploadImageCallBack,
            customImages,
            defaultImages = defaultSideBarImagesList,
            disableWhiteLabel,
            defaultTemplatesList = [],
            customTemplatesList = [],
            onDeleteCustomTemplate,
            qrLink = 'www.google.com',
            styleProps = {},
            defaultText,
            onSave,
            showSaveButton,
            saveButtonText,
            locale = 'en',
            onCreateNewTemplate,
            onTemplateSelect,
            showBackgroundImagePicker,
            showOpacityPicker,
            uploadQRLogoImage,
            zoomLevel,
        },
        ref,
    ) => {
        const stageRef = useRef(null);
        const [copiedElement, setCopiedElement] = useState(null);
        const [selectedTab, setSelectedTab] = useState(sideBarpillsList.template);
        const [languageLocale, setLanguageLocale] = useState(validateLocale(locale));
        const [loadingFonts, setLoadingFonts] = useState(true);
        const [loadingImages, setLoadingImages] = useState(true);
        const [loading, setLoading] = useState(false);
        const [loadingUploadImage, setLoadingUploadImage] = useState(false);
        const [helperSideBarVisible, setHelperSideBarVisible] = useState(true);
        const [zoomPercentage, setZoomPercentage] = useState(zoomLevel ?? 100);
        const [elements, setElements] = useState(elementsList);
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
        const [qrStrokeWidth, setQrStrokeWidth] = useState(2);
        const [qrStrokeColor, setQrStrokeColor] = useState(theme.color.black);
        const [qrOpacity, setQrOpacity] = useState(1);
        const [selectedElement, setSelectedElement] = useState(null);
        const [customImagesList, setCustomImagesList] = useState(customImages || []);
        const [qrLogo, setQrLogo] = useState(defaultQrLogo);
        const [defaultTextProps, setDefaultTextProps] = useState(basicTextProps);

        const overallLoading = loadingFonts || loadingImages || loadingUploadImage || loading;

        const undo = useCallback(() => {
            if (history.length > 0) {
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

        useImperativeHandle(ref, () => ({
            onSave: async () => {
                setLoading(true);
                setSelectedElement(null);
                await new Promise(resolve => setTimeout(resolve, 100));
                let processedElements = removeImageProperty(elements);
                const dataURL = await exportStageAsImage(stageRef);
                setLoading(false);
                return { elements: processedElements, image: dataURL };
            },
            loading: overallLoading,
            setLoading,
            undoCount: history.length,
            hasChanges: history.length > 0,
            redoCount: redoStack.length,
        }));
        useEffect(() => {
            if (typeof zoomLevel === 'number') {
                setZoomPercentage(zoomLevel);
            }
        }, [zoomLevel]);
        useEffect(() => {
            const handleKeyDown = e => {
                const isMac = navigator.platform.toUpperCase().includes('MAC');
                const ctrlOrCmd = isMac ? e.metaKey : e.ctrlKey;
                const shiftKey = e.shiftKey;

                // Delete
                if (
                    (e.key === 'Delete' || e.key === 'Backspace') &&
                    selectedElement &&
                    selectedElement?.draggable !== false &&
                    !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
                    !document.activeElement.isContentEditable
                ) {
                    e.preventDefault();
                    onDeleteSelectedElement();
                }

                // Copy
                if (ctrlOrCmd && e.key.toLowerCase() === 'c') {
                    if (selectedElement) {
                        e.preventDefault();
                        const copied = { ...selectedElement };
                        delete copied.ref;
                        setCopiedElement(copied);
                    }
                }

                // Paste
                if (ctrlOrCmd && e.key.toLowerCase() === 'v') {
                    if (copiedElement) {
                        e.preventDefault();
                        const newElement = {
                            ...copiedElement,
                            id: `element${Date.now()}`,
                            x: copiedElement.x + 10,
                            y: copiedElement.y + 10,
                            draggable: true,
                        };
                        addElement(newElement);
                        setSelectedElement(newElement);
                    }
                }

                // Undo: Ctrl/Cmd + Z
                if (ctrlOrCmd && !shiftKey && e.key.toLowerCase() === 'z') {
                    e.preventDefault();
                    undo();
                }

                // Redo: Ctrl/Cmd + Shift + Z or Ctrl + Y
                if (
                    (ctrlOrCmd && shiftKey && e.key.toLowerCase() === 'z') ||
                    (ctrlOrCmd && e.key.toLowerCase() === 'y')
                ) {
                    e.preventDefault();
                    redo();
                }
            };

            window.addEventListener('keydown', handleKeyDown);
            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [selectedElement, copiedElement, undo, redo]);

        // console.log(isPropValid('onClick'));
        useEffect(() => {
            setLanguageLocale(validateLocale(locale));
        }, [locale]);

        useEffect(() => {
            setCustomImagesList(customImages || []);
        }, [customImages]);

        useEffect(() => {
            setLoadingFonts(true);
            loadAllGoogleFonts()
                .then(() => {
                    // eslint-disable-next-line no-console
                    // console.log(msg);
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.error('❌ Error loading fonts:', err);
                })
                .finally(() => {
                    setTimeout(() => {
                        setLoadingFonts(false);
                    }, 1000);
                    // eslint-disable-next-line no-console
                    console.log('🎉 Font loading complete!');
                });
        }, []);
        useEffect(() => {
            LoadImages(elementsList);
            setElements(elementsList);
        }, [...elementsList]);

        const LoadImages = elems => {
            setLoadingImages(true);
            preloadRelevantImages(elems)
                .then(({ errors }) => {
                    // eslint-disable-next-line no-console
                    // console.log('✅ Loaded images:', successes);
                    if (errors?.length > 0) {
                        // eslint-disable-next-line no-console
                        console.log('❌ Failed images:', errors);
                    }
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.error('Something went really wrong:', err);
                })
                .finally(() => {
                    setLoadingImages(false);
                });
        };

        const editorHeight = useMemo(() => {
            return calculatePercentageValue(
                pageSizesDimensions[
                    elements?.find(e => e?.type === elementTypes?.pageSize)?.size || pageSizes?.A4
                ]?.height,
                zoomPercentage,
            );
        }, [zoomPercentage, elements]);
        const editorWidth = useMemo(() => {
            return calculatePercentageValue(
                pageSizesDimensions[
                    elements?.find(e => e?.type === elementTypes?.pageSize)?.size || pageSizes?.A4
                ]?.width,
                zoomPercentage,
            );
        }, [zoomPercentage, elements]);
        const selectedPageSize = useMemo(() => {
            return elements?.find(e => e?.type === elementTypes?.pageSize)?.size || pageSizes?.A4;
        }, [elements]);

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
        const onSetPageSize = newSize => {
            if (!newSize) return;

            const oldSize =
                elements?.find(e => e?.type === elementTypes?.pageSize)?.size || pageSizes.A4;

            const oldDims = pageSizesDimensions[oldSize];
            const newDims = pageSizesDimensions[newSize];

            const scaleX = newDims.width / oldDims.width;
            const scaleY = newDims.height / oldDims.height;

            const scaledElements = elements.map(elem => {
                if (elem.type === elementTypes.pageSize) {
                    return { ...elem, size: newSize }; // Just update the size
                }

                let scaled = { ...elem };

                // Scale common position and size props
                if (typeof scaled.x === 'number') scaled.x *= scaleX;
                if (typeof scaled.y === 'number') scaled.y *= scaleY;
                if (typeof scaled.width === 'number') scaled.width *= scaleX;
                if (typeof scaled.height === 'number') scaled.height *= scaleY;
                if (typeof scaled.radius === 'number') scaled.radius *= Math.min(scaleX, scaleY); // for circles, stars
                if (typeof scaled.fontSize === 'number')
                    scaled.fontSize *= Math.min(scaleX, scaleY);

                // Special case: QR codes or icons that have scale or size props
                if (scaled.points && Array.isArray(scaled.points)) {
                    scaled.points = scaled.points.map((val, idx) =>
                        idx % 2 === 0 ? val * scaleX : val * scaleY,
                    );
                }

                return scaled;
            });

            saveHistory(removeImageProperty(scaledElements));
        };

        const onChangeCuttingGuideProp = (type, value) => {
            let elemClone = JSON.parse(JSON.stringify(elements));
            let sizeIndex = elemClone.findIndex(e => e?.type === elementTypes?.pageSize);
            if (sizeIndex > -1) {
                elemClone[sizeIndex][type] = value;
            } else {
                let sizeElement = {
                    type: elementTypes?.pageSize,
                    id: `element${Date.now()}`,
                };
                sizeElement[type] = value;
                elemClone.push(sizeElement);
            }
            saveHistory(removeImageProperty(elemClone));
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
                shapeProps['name'] = elementTypes.square;
                shapeProps['cornerRadius'] = 0;
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
        const onRemoveBackgroundImage = () => {
            let elemClone = JSON.parse(JSON.stringify(elements));
            let backgroundImageIndex = elemClone.findIndex(
                e => e?.type === elementTypes?.backgroundImage,
            );
            if (backgroundImageIndex > -1) {
                elemClone.splice(backgroundImageIndex, 1);
                saveHistory(elemClone);
            }
        };

        const onChangeBackgroundImageOpacity = val => {
            let backgroundImageIndex = elements?.findIndex(
                e => e?.type === elementTypes?.backgroundImage,
            );
            if (backgroundImageIndex > -1) {
                const updatedElements = elements?.map(el =>
                    el.type === elementTypes?.backgroundImage ? { ...el, opacity: val } : el,
                );

                saveHistory(updatedElements);
            }
            setBackgroundImageOpacity(val);
        };

        const onSelectElement = element => {
            if (isElementShape(element)) {
                setSelectedTab(sideBarpillsList?.shape);
            } else if (isElementOfSameType(element, elementTypes?.image)) {
                setSelectedTab(sideBarpillsList?.image);
            } else if (isElementOfSameType(element, elementTypes?.qr)) {
                setSelectedTab(sideBarpillsList?.qr);
            } else if (isElementOfSameType(element, elementTypes?.text)) {
                setSelectedTab(sideBarpillsList?.text);
            }
            if (element) {
                let elem = element;
                delete elem['ref'];
                setSelectedElement({ ...elem });
                setHelperSideBarVisible(true);
            } else {
                setSelectedElement(null);
            }
        };

        const changeSelectedElementProperty = (key, value) => {
            let selectedElementCopy = { ...selectedElement };
            selectedElementCopy[key] = value;
            delete selectedElementCopy['ref'];
            if (key === 'fontWeight') {
                selectedElementCopy['fontVariant'] = value;
            }
            const updatedElements = elements?.map(el =>
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
            let index = elements?.findIndex(e => e?.id === selectedElement?.id);
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
            const index = copyElements?.findIndex(elem => elem.id === selectedElement?.id);
            if (index === -1) {
                return;
            }
            const [selectedElem] = copyElements?.splice(index, 1);
            copyElements?.push(selectedElem);
            saveHistory([...copyElements]);
        };
        const createNewTemplate = (
            elems = [
                ...defaultElements,
                {
                    type: elementTypes.qr,
                    id: `element${Date.now() + 1}`,
                    width: 110,
                    height: 110,
                    x: 194.5,
                    y: 280,
                    fill: theme.color.green_80D965,
                    stroke: theme.color.black,
                    strokeWidth: 2,
                    draggable: true,
                    qrLogo: null,
                    qrText: qrLink,
                    opacity: 1,
                    logoVisible: false,
                },
            ],
        ) => {
            setElements([...elems]);
            setHistory([]);
            setRedoStack([]);

            if (typeof onCreateNewTemplate === 'function') {
                onCreateNewTemplate(elems);
            }

            // Clear selected template ID
            if (typeof onTemplateSelect === 'function') {
                onTemplateSelect(null);
            }
        };

        const sendSelectedElementToBack = () => {
            let copyElements = [...elements];
            const index = copyElements?.findIndex(elem => elem.id === selectedElement?.id);
            if (index === -1) {
                return;
            }
            const [selectedElem] = copyElements?.splice(index, 1);
            copyElements?.unshift(selectedElem);
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
            // console.error({img});
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
        const addTextToCanvas = e => {
            let text = e ? e : defaultTextProps;
            let textProps = {
                id: `element${Date.now()}`,
                x: editorWidth / 2 - 100,
                y: editorHeight / 2,
                opacity: text?.opacity || defaultTextProps?.opacity,
                type: elementTypes.text,
                draggable: true,
                text: text?.text || defaultTextProps?.text,
                fontSize: text?.fontSize || defaultTextProps?.fontSize,
                fontFamily: text?.fontFamily || defaultTextProps?.fontFamily,
                color: text?.color || defaultTextProps?.color,
                textDecoration: text?.textDecoration || defaultTextProps?.textDecoration,
                fontStyle: text?.fontStyle || defaultTextProps?.fontStyle,
                fontWeight: text?.fontWeight || defaultTextProps?.fontWeight,
                textAlign: text?.textAlign || defaultTextProps?.textAlign,
            };
            if (text?.width) {
                textProps['width'] = text?.width;
            }

            addElement(textProps);
        };

        const addQrCode = () => {
            let qrProps = {
                id: `element${Date.now()}`,
                type: elementTypes.qr,
                height: 110,
                width: 110,
                x: editorWidth / 2 - 50,
                y: editorHeight / 2 - 50,
                fill: theme.color.green_80D965,
                stroke: qrStrokeColor,
                strokeWidth: qrStrokeWidth,
                draggable: true,
                qrLogo: null,
                qrText: qrLink,
                opacity: qrOpacity,
                logoVisible: false,
            };
            addElement(qrProps);
        };

        const removeQrCode = () => {
            let copy = elements?.filter(el => el.type !== elementTypes?.qr);
            if (selectedElement?.type === elementTypes?.qr) {
                setSelectedElement(null);
            }
            saveHistory([...copy]);
        };
        const onChangeQrStrokeWidth = e => {
            if (isElementOfSameType(selectedElement, elementTypes?.qr)) {
                changeSelectedElementProperty('strokeWidth', e);
            } else {
                setQrStrokeWidth(e);
            }
        };

        const onChangeQrStrokeColor = e => {
            if (isElementOfSameType(selectedElement, elementTypes?.qr)) {
                changeSelectedElementProperty('stroke', e);
            } else {
                setQrStrokeColor(e);
            }
        };

        const onChangeQrOpacity = e => {
            if (isElementOfSameType(selectedElement, elementTypes?.qr)) {
                changeSelectedElementProperty('opacity', e);
            } else {
                setQrOpacity(e);
            }
        };
        const toggleQr = () => {
            if (elements?.findIndex(elem => elem.type === elementTypes?.qr) > -1) {
                removeQrCode();
            } else {
                addQrCode();
            }
        };
        const turnLogoVisibiltyOn = () => {
            const updatedElements = elements?.map(el =>
                el.type === elementTypes?.qr
                    ? { ...el, logoVisible: true, qrLogo: el?.qrLogo || qrLogo }
                    : el,
            );
            saveHistory(updatedElements);
        };
        const turnLogoVisibiltyOff = () => {
            const updatedElements = elements?.map(el =>
                el.type === elementTypes?.qr ? { ...el, logoVisible: false } : el,
            );
            saveHistory(updatedElements);
        };
        const toggleQrLogo = () => {
            let index = elements?.findIndex(elem => elem.type === elementTypes?.qr);
            if (index > -1) {
                setSelectedElement(null);
                if (elements?.[index]?.logoVisible) {
                    turnLogoVisibiltyOff();
                } else {
                    turnLogoVisibiltyOn();
                }
            }
        };

        const addQrLogo = async () => {
            const file = await pickImage();
            if (!file) return;

            if (uploadQRLogoImage) {
                try {
                    setLoadingUploadImage(true);
                    const result = await uploadQRLogoImage(file);

                    const imageUrl = typeof result === 'string' ? result : result?.url;

                    if (imageUrl) {
                        addLogo(imageUrl);
                    } else {
                        console.warn('uploadQRLogoImage did not return a valid image URL');
                    }
                } catch (error) {
                    console.error('Error uploading QR logo image:', error);
                } finally {
                    setLoadingUploadImage(false);
                }
            } else {
                const reader = new FileReader();
                reader.onload = () => {
                    addLogo(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
        const addLogo = url => {
            let index = elements?.findIndex(elem => elem.type === elementTypes?.qr);
            setQrLogo(url);
            if (index > -1) {
                // if (elements[index]?.logoVisible) {
                const updatedElements = elements?.map(el =>
                    el.type === elementTypes?.qr ? { ...el, qrLogo: url } : el,
                );
                saveHistory(updatedElements);
                // }
            }
        };

        const onChangeTextProperty = (key, value) => {
            if (isElementOfSameType(selectedElement, elementTypes?.text)) {
                changeSelectedElementProperty(key, value);
            } else {
                let copyDefultProps = { ...defaultTextProps };
                copyDefultProps[key] = value;
                setDefaultTextProps({ ...copyDefultProps });
            }
        };
        const onSaveProgress = async () => {
            if (!onSave) {
                return;
            }
            setLoading(true);
            setSelectedElement(null);
            await new Promise(resolve => setTimeout(resolve, 100));
            let processedElements = removeImageProperty(elements);
            const dataURL = await exportStageAsImage(stageRef);
            setLoading(false);
            onSave({ elements: processedElements, image: dataURL });
        };

        return (
            <StyleSheetManager shouldForwardProp={isPropValid}>
                <StudioWrapper>
                    <SideBar
                        selectedSideBarItem={selectedTab}
                        onClickPill={onSelectedTab}
                        languageLocale={languageLocale}
                        disableWhiteLabel={disableWhiteLabel}
                        styleProps={styleProps}
                    />
                    <HelperSideBar
                        selectedSideBarItem={selectedTab}
                        onCollapse={onCollapseHelperSideBar}
                        helperSideBarVisible={helperSideBarVisible}
                        onAddShape={addShape}
                        defaultImagesList={defaultImages}
                        customImagesList={customImagesList}
                        onAddCustomImageToList={addCustomImageToList}
                        onAddImageToCanvas={addImageToCanvas}
                        onAddTextToCanvas={addTextToCanvas}
                        toggleQr={toggleQr}
                        qrPresent={elements?.findIndex(elem => elem.type === elementTypes?.qr) > -1}
                        toggleQrLogo={toggleQrLogo}
                        addQrLogo={addQrLogo}
                        qrLogo={
                            elements?.[elements?.findIndex(elem => elem.type === elementTypes?.qr)]
                                ?.qrLogo || qrLogo
                        }
                        elements={elements}
                        oncreateNewTemplate={createNewTemplate}
                        uploadImageCallBack={uploadImageCallBack}
                        setLoadingUploadImage={setLoadingUploadImage}
                        defaultTemplatesList={defaultTemplatesList}
                        customTemplatesList={customTemplatesList}
                        onDeleteCustomTemplate={onDeleteCustomTemplate}
                        styleProps={styleProps}
                        defaultText={defaultText}
                        languageLocale={languageLocale}
                        onTemplateSelect={onTemplateSelect}
                    />
                    {loadingFonts ? null : (
                        <Editor
                            // canvasSize={canvasSize}
                            cuttingGuideStroke={
                                elements?.find(e => e?.type === elementTypes?.pageSize)
                                    ?.cuttingGuideStroke || 0
                            }
                            cuttingGuideStrokeColor={
                                elements?.find(e => e?.type === elementTypes?.pageSize)
                                    ?.cuttingGuideStrokeColor || theme?.color.black
                            }
                            onChangeCuttingGuideProp={(type, value) => {
                                onChangeCuttingGuideProp(type, value);
                            }}
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
                            qrStrokeWidth={qrStrokeWidth}
                            qrStrokeColor={qrStrokeColor}
                            qrOpacity={qrOpacity}
                            onChangeQrStrokeWidth={onChangeQrStrokeWidth}
                            onChangeQrStrokeColor={onChangeQrStrokeColor}
                            onChangeQrOpacity={onChangeQrOpacity}
                            selectedElement={selectedElement}
                            onSelectElement={onSelectElement}
                            stageRef={stageRef}
                            saveHistory={saveHistory}
                            onChangeBackgroundImageOpacity={onChangeBackgroundImageOpacity}
                            backgroundImageOpacity={
                                elements?.find(e => e?.type === elementTypes?.backgroundImage)
                                    ?.opacity || backgroundImageOpacity
                            }
                            onDeleteSelectedElement={onDeleteSelectedElement}
                            onCopySelectedElement={onCopySelectedElement}
                            onToggleLockElement={onToggleLockElement}
                            bringSelectedElementToFront={bringSelectedElementToFront}
                            sendSelectedElementToBack={sendSelectedElementToBack}
                            defaultTextProps={defaultTextProps}
                            onChangeTextProperty={onChangeTextProperty}
                            onSetPageSize={onSetPageSize}
                            selectedPageSize={selectedPageSize}
                            loadingImages={loadingImages}
                            loadingFonts={loadingFonts}
                            uploadImageCallBack={uploadImageCallBack}
                            setLoadingUploadImage={setLoadingUploadImage}
                            onSave={onSave && onSaveProgress}
                            showSaveButton={showSaveButton}
                            onSetSelectedTab={onSelectedTab}
                            saveButtonText={saveButtonText}
                            languageLocale={languageLocale}
                            onRemoveBackgroundImage={onRemoveBackgroundImage}
                            showBackgroundImagePicker={showBackgroundImagePicker}
                            showOpacityPicker={showOpacityPicker}
                            changeSelectedElementProperty={changeSelectedElementProperty}
                        />
                    )}
                    {overallLoading && (
                        <Overlay>
                            <LoadingSpinner size="60px" color={theme.color.secondary} />
                        </Overlay>
                    )}
                </StudioWrapper>
            </StyleSheetManager>
        );
    },
);

Studio.propTypes = propTypes;
Studio.displayName = 'Studio';
