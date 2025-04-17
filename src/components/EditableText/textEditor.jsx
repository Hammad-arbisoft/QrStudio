import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from './props';
import { Html } from 'react-konva-utils';
import { element } from 'prop-types';

export const TextEditor = ({ textNodeRef, value, onBlur, onChange, textWidth }) => {
    const textareaRef = useRef(null);
    const [styles, setStyles] = useState({});

    useEffect(() => {
        if (!textNodeRef) return;
        // const position = textNodeRef?.absolutePosition();
        // const scale = textNodeRef?.getAbsoluteScale();
        const stg = textNodeRef?.getStage().findOne(`#${textNodeRef?.attrs?.id}`);

        const styleObj = {
            position: 'absolute',
            top: `${stg?.attrs?.y}px`,
            left: `${stg?.attrs?.x}px`,
            width: `${textWidth}px`,
            height: `${textNodeRef?.getHeight()}px`,
            fontSize: `${textNodeRef.fontSize()}px`,
            fontFamily: textNodeRef.fontFamily(),
            lineHeight: textNodeRef.lineHeight(),
            color: textNodeRef.fill(),
            background: 'transparent',
            border: 'none',
            padding: '0px',
            margin: '0px',
            overflow: 'hidden',
            outline: 'none',
            resize: 'none',
            transformOrigin: 'left top',
            textAlign: textNodeRef.align(),
            transform: `rotateZ(${textNodeRef.rotation()}deg)`,
            minHeight: '1em',
            whiteSpace: 'normal',
            userSelect: 'text',
            fontStyle: textNodeRef?.fontStyle?.() || 'normal',
            fontWeight: textNodeRef?.fontVariant?.() || 400,
            textDecoration: textNodeRef?.textDecoration?.() || 'none',
        };

        setStyles(styleObj);
    }, [textNodeRef?.current, value, element]);
    useEffect(() => {
        setTimeout(() => {
            if (textareaRef?.current) {
                textareaRef?.current?.focus();
                textareaRef?.current?.select();
            }
        }, 200);
    }, []);
    return (
        <Html>
            <textarea
                ref={textareaRef}
                style={styles}
                value={value}
                onChange={e => {
                    onChange(e.target.value);
                }}
                onBlur={onBlur}
            />
        </Html>
    );
};

TextEditor.propTypes = propTypes;
