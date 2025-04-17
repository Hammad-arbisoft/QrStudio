import React from 'react';
import { propTypes } from './props';
import theme from '@/theme';

export const Overlay = ({ children, backgroundColor = theme.color.black_transparent }) => (
    <div
        style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: backgroundColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        {children}
    </div>
);

Overlay.propTypes = propTypes;
