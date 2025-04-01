import React, { useEffect, useState } from 'react';
import { propTypes } from './props';
import { Image } from 'react-konva';

export const CanvasImage = ({ id, element, onClick, onDragEnd, onTransformEnd }) => {
    const [loaded, setLoaded] = useState(false);
    const [image, setImage] = useState(null);

    useEffect(() => {
        // const reader = new FileReader();
        // reader.onload = () => {
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = element?.src;
        img.onload = () => {
            setImage(img);
            setLoaded(true);
        };
        // };
        // reader.readAsDataURL(file);
    }, [element]);
    if (loaded) {
        return (
            <Image
                id={id}
                image={image}
                {...element}
                width={element?.width}
                height={element?.height}
                onClick={() => onClick && onClick()}
                onDragEnd={e => onDragEnd && onDragEnd(e)}
                onTransformEnd={e => {
                    onTransformEnd && onTransformEnd(e);
                }}
            />
        );
    } else {
        return null;
    }
};

CanvasImage.propTypes = propTypes;
