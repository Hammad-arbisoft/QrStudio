import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from './props';
import { Text } from 'react-konva';
import { sanitizeNumber } from '@/utils';
import { TextEditor } from './textEditor';

export const EditableText = ({
    element,
    onClick,
    onDragEnd,
    onTransformEnd,
    id,
    onTransform,
    onChangeTextContent,
    onChangeTextProperty,
    onDragMove,
}) => {
    const textRef = useRef();
    const [textWidth, setTextWidth] = useState(element?.width);
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(element?.text);
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        setIsFontLoaded(false);
        setTimeout(() => {
            setIsFontLoaded(true);
        }, 150);
    }, [element?.fontFamily, element?.fontWeight, element?.fontStyle]);
    useEffect(() => {
        setTextWidth(element?.width);
        setText(element?.text);
    }, [element]);

    const tranform = e => {
        const node = e.target;
        const scaleX = sanitizeNumber(node.scaleX(), 1);
        const updatedWidth = sanitizeNumber(node.width() * scaleX, element.width);

        const updatedObject = {
            ...node.attrs,
            width: updatedWidth,
            scaleX: 1,
            scaleY: 1,
        };
        delete updatedObject['ref'];
        setTextWidth(updatedWidth);
        onTransform && onTransform(updatedObject);
        node.scaleX(1);
        node.scaleY(1);
    };

    const transformEnd = e => {
        onTransformEnd && onTransformEnd(e);
    };
    const handleTextDblClick = () => {
        setIsEditing(true);
    };

    const handleTextChange = newText => {
        setText(newText);
        onChangeTextContent(newText);
    };
    const onSelect = () => {
        // const node = textRef?.current?.target;
        let width = textRef?.current?.getWidth();
        if (width) {
            setTextWidth(width);
            onChangeTextProperty('width', width);
        }
        // const scaleX = sanitizeNumber(node?.scaleX(), 1);
        // const updatedWidth = sanitizeNumber(node?.width() * scaleX, element?.width);
        // console.error(textRef?.current?.getWidth());

        onClick && onClick();
    };
    if (!isFontLoaded) {
        return (
            <Text
                ref={textRef}
                key={id}
                {...element}
                id={element.id}
                fontVariant={element?.fontWeight}
                align={element?.textAlign}
                width={textWidth}
                text={text}
                fill={element?.color}
                opacity={0}
                visible={false}
            />
        );
    }
    return (
        <>
            <Text
                ref={textRef}
                key={id}
                {...element}
                id={element.id}
                fontVariant={element?.fontWeight}
                align={element?.textAlign}
                width={textWidth}
                text={text}
                fill={element?.color}
                onClick={() => onSelect()}
                onTransform={e => tranform(e)}
                onDragEnd={e => onDragEnd && onDragEnd(e)}
                onTransformEnd={e => {
                    transformEnd(e);
                }}
                onDragMove={onDragMove}
                onDblClick={handleTextDblClick}
                onDblTap={handleTextDblClick}
                visible={!isEditing}
            />
            {isEditing && (
                <TextEditor
                    value={text}
                    textWidth={textWidth}
                    textNodeRef={textRef?.current}
                    onChange={handleTextChange}
                    onBlur={() => {
                        setIsEditing(false);
                        // onChangeTextContent(text);
                    }}
                />
            )}
        </>
    );
};

EditableText.propTypes = propTypes;
