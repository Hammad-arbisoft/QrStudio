import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconGrid } from '@/assets';
import theme from '@/theme';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const StrokePicker = ({
    value,
    strokeColor,
    min = 0,
    max = 30,
    step = 1,
    onChangeStrokeWidth,
    onChangeShapeStrokeColor,
    pickerWidth = 100,
    translation,
}) => {
    const pickerRef = useRef(null);
    const [strokePickerVisible, setStrokePickerVisible] = useState(false);
    const [color, setColor] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            if (!color) {
                return;
            }
            onChangeShapeStrokeColor(color);
        }, 200);

        return () => clearTimeout(handler);
    }, [color]);

    const onChangeColor = e => {
        setColor(e.target.value);
    };
    useEffect(() => {
        const handleClickOutside = event => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setStrokePickerVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
            }}
            ref={pickerRef}
        >
            <ToolBarButtonWrapper
                gap={12}
                tooltip={
                    translation?.STROKE_WIDTH_AND_COLOR || TEXT_DICTIONARY?.STROKE_WIDTH_AND_COLOR
                }
                tooltipPosition={'bottom'}
            >
                <StyledImage src={IconGrid} />
                <StyledText
                    fontFamily={theme.fonts.secondary}
                    // marginRight={10}
                    paddingRight={10}
                    onClick={() => {
                        setStrokePickerVisible(true);
                    }}
                >
                    {value}
                </StyledText>
                <div
                    style={{
                        height: 22,
                        width: 22,
                        borderRadius: 4,
                        background: theme.color.gray_EFEFEF,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                    }}
                >
                    <input
                        type="color"
                        value={strokeColor}
                        onChange={onChangeColor}
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            cursor: 'pointer',
                            opacity: 0,
                        }}
                    />
                    <div
                        style={{
                            height: 13,
                            width: 1,
                            backgroundColor: strokeColor,
                            transform: 'rotate(38deg)',
                            position: 'absolute',
                            pointerEvents: 'none',
                        }}
                    />
                </div>
            </ToolBarButtonWrapper>
            {strokePickerVisible && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: -50,
                        background: 'white',
                        padding: 10,
                        borderRadius: 5,
                        border: 'solid 1px rgba(0,0,0,0.1)',
                        zIndex: 9999,
                    }}
                >
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={e => {
                            onChangeStrokeWidth(Number(e.target.value));
                        }}
                        style={{ width: pickerWidth }}
                    />
                </div>
            )}
        </div>
    );
};

StrokePicker.propTypes = propTypes;
