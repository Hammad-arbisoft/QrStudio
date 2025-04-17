import React, { useEffect, useState } from 'react';
import { propTypes } from './props';
import { Group, Rect, Text } from 'react-konva';
import { calculatePercentageValue } from '@/utils';
import theme from '@/theme';
import QRCode from 'qrcode';

export const QrElement = ({
    element,
    onClick,
    onDragEnd,
    onTransformEnd,
    onDragMove,
    LogoTitle,
}) => {
    let innerRectWidth = calculatePercentageValue(element?.width, 24);
    let innerRectHeight = calculatePercentageValue(element?.height, 24);
    let innerRectX = calculatePercentageValue(element?.width, 38);
    let innerRectY = calculatePercentageValue(element?.height, 38);

    const [loaded, setLoaded] = useState(false);
    const [logo, setLogo] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (!element?.qrLogo) {
            return;
        }
        const img = new window.Image();
        img.crossOrigin = 'anonymous';
        img.src = element?.qrLogo;
        img.onload = () => {
            const scaleX = innerRectWidth / img.width;
            const scaleY = innerRectHeight / img.height;
            const scale = Math.min(scaleX, scaleY);
            setLogo({ img, scale });
        };
    }, [element]);
    const addQR = async () => {
        try {
            QRCode.toDataURL(element?.qrText, { margin: 0, width: 110 }, function (err, url) {
                const img = new window.Image();
                img.crossOrigin = 'anonymous';
                img.src = url;
                img.onload = () => {
                    const scaleX = element?.width / img.width;
                    const scaleY = element.height / img.height;
                    const scale = Math.min(scaleX, scaleY);
                    setImage({ img, scale });
                    setLoaded(true);
                };
            });
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error('Failed to generate QR code', err);
        }
    };
    useEffect(() => {
        addQR();
    }, [element]);

    if (loaded) {
        return (
            <Group
                key={element.id}
                {...element}
                id={element.id}
                onClick={() => onClick && onClick()}
                onDragEnd={e => onDragEnd && onDragEnd(e)}
                onDragMove={onDragMove}
                onTransformEnd={e => {
                    onTransformEnd && onTransformEnd(e);
                }}
            >
                <Rect
                    width={element?.width}
                    height={element?.height}
                    fillPatternImage={image?.img}
                    fillPatternRepeat="no-repeat"
                    fillPatternScale={{
                        x: element?.width / image?.img.width,
                        y: element?.height / image?.img.height,
                    }}
                    stroke={element?.stroke}
                    strokeWidth={element?.strokeWidth}
                    opacity={element?.opacity}
                    strokeScaleEnabled={false}
                />
                {element?.logoVisible && (
                    <Group x={innerRectX} y={innerRectY}>
                        <Rect
                            width={innerRectWidth}
                            height={innerRectHeight}
                            fill={theme.color.white}
                        />

                        {logo ? (
                            <Rect
                                width={innerRectWidth}
                                height={innerRectHeight}
                                fillPatternImage={logo?.img}
                                fillPatternRepeat="no-repeat"
                                fillPatternScale={{
                                    x: innerRectHeight / logo?.img.width,
                                    y: innerRectHeight / logo?.img.height,
                                }}
                            />
                        ) : (
                            <Text
                                text={LogoTitle}
                                fontSize={8}
                                fill={theme.color.gray_9DA1A7}
                                x={3}
                                y={innerRectHeight / 2 - 3}
                                fontFamily={theme.fonts.primary}
                                fontStyle={theme.fontWeights[600]}
                            />
                        )}
                    </Group>
                )}
            </Group>
        );
    } else {
        return null;
    }
};

QrElement.propTypes = propTypes;
