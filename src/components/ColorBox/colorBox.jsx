import React, { useEffect, useState } from 'react';
import { propTypes } from './props';
import { Box } from './styled';

export const ColorBox = ({ backgroundColor, onChange }) => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            if (!color) {
                return;
            }
            onChange(color);
        }, 200);

        return () => clearTimeout(handler);
    }, [color]);

    const onChangeColor = e => {
        setColor(e.target.value);
    };

    return <Box value={backgroundColor} onChange={onChangeColor} />;
};

ColorBox.propTypes = propTypes;
