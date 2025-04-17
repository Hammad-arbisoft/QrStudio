import React from 'react';
import { propTypes } from './props';
import { TooltipText, Wrapper } from './styled';

export const Tooltip = ({ children, text, position = 'top', disabled = false }) => (
    <Wrapper disabled={disabled}>
        {children}
        {!disabled && <TooltipText position={position}>{text}</TooltipText>}
    </Wrapper>
);

Tooltip.propTypes = propTypes;
