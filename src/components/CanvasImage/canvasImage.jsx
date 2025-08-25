/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { propTypes } from './props';
import { Image as KonvaImage } from 'react-konva';

export const CanvasImage = ({
    id,
    element,
    onClick,
    onDragEnd,
    onTransformEnd,
    onDragMove,
    setLoading,
}) => {
    const [loaded, setLoaded] = useState(false);
    const [imgEl, setImgEl] = useState(null);

    useEffect(() => {
        let cancelled = false;
        let objectUrl;

        async function load() {
            try {
                setLoading(true);
                // Force a network fetch with CORS, ignoring any stale cached copy
                const res = await fetch(element?.src, { mode: 'cors', cache: 'reload' });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const blob = await res.blob();
                objectUrl = URL.createObjectURL(blob);

                const img = new window.Image();
                // No need to set crossOrigin for blob URLs (they're same-origin to your page)
                img.onload = () => {
                    if (!cancelled) {
                        setImgEl(img);
                        setLoaded(true);
                    }
                    URL.revokeObjectURL(objectUrl);
                };
                img.src = objectUrl;
            } catch (err) {
                console.error('Failed to load image for canvas:', err);
            } finally {
                setLoading(false);
            }
        }

        setLoaded(false);
        setImgEl(null);
        if (element?.src) load();

        return () => {
            cancelled = true;
            if (objectUrl) URL.revokeObjectURL(objectUrl);
        };
    }, [element?.src]);

    if (!loaded || !imgEl) return null;

    return (
        <KonvaImage
            id={id}
            image={imgEl}
            {...element}
            width={element?.width}
            height={element?.height}
            onClick={() => onClick && onClick()}
            onDragEnd={e => onDragEnd && onDragEnd(e)}
            onDragMove={onDragMove}
            onTransformEnd={e => onTransformEnd && onTransformEnd(e)}
            strokeScaleEnabled={false}
        />
    );
};

CanvasImage.propTypes = propTypes;
