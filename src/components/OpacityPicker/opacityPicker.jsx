import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { IconOpacity } from '@/assets';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const OpacityPicker = ({
    value = 1,
    onChangeOpacity,
    min = 0,
    max = 1,
    step = 0.1,
    pickerWidth = 100,
    leftChild,
    rightChild,
    gap = 12,
    showLeftChild = true,
    varient = 'opacity',
    fontFamily = theme.fonts.secondary,
    tooltip = TEXT_DICTIONARY?.OPACITY,
    tooltipPosition = 'bottom',
}) => {
    const pickerRef = useRef(null);

    const [opacityPickerVisible, setOpacityPickerVisible] = useState(false);
    useEffect(() => {
        const handleClickOutside = event => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setOpacityPickerVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            ref={pickerRef}
            style={{
                position: 'relative',
            }}
            onClick={() => {
                setOpacityPickerVisible(true);
            }}
        >
            <ToolBarButtonWrapper gap={gap} tooltip={tooltip} tooltipPosition={tooltipPosition}>
                {showLeftChild && (leftChild ? leftChild : <StyledImage src={IconOpacity} />)}
                <StyledText fontFamily={fontFamily}>
                    {varient === 'opacity' ? `${value * 100}%` : value}
                </StyledText>
                {rightChild && rightChild}
            </ToolBarButtonWrapper>
            {opacityPickerVisible && (
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
                            onChangeOpacity(Number(e.target.value));
                        }}
                        style={{ width: pickerWidth }}
                    />
                </div>
            )}
        </div>
    );
};

OpacityPicker.propTypes = propTypes;
