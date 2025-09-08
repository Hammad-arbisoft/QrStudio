import React, { useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Wrapper, Floating } from './styled';

export const Tooltip = ({
    text,
    position = 'top',
    children,
    disabled,
    width, // e.g. 220
    maxWidth = 260,
    fontSize = 12,
    lineHeight = 1.3,
    padding = '6px 10px',
    textAlign = 'left',
}) => {
    const ref = useRef(null);
    const [rect, setRect] = useState(null);

    const show = useCallback(() => {
        if (disabled || !ref.current) return;
        setRect(ref.current.getBoundingClientRect());
    }, [disabled]);

    const hide = useCallback(() => setRect(null), []);

    return (
        <Wrapper ref={ref} onMouseEnter={show} onMouseLeave={hide} disabled={disabled}>
            {children}
            {rect &&
                createPortal(
                    <Floating
                        role="tooltip"
                        style={{
                            ...calcStyle(rect, position),
                            width: width ? `${width}px` : undefined,
                            maxWidth: `${maxWidth}px`,
                            fontSize,
                            lineHeight,
                            padding,
                            textAlign,
                        }}
                    >
                        {text}
                    </Floating>,
                    document.body,
                )}
        </Wrapper>
    );
};

const calcStyle = (r, pos) => {
    const gap = 8;
    const s = { position: 'fixed', zIndex: 2147483647 };
    switch (pos) {
        case 'top':
            return {
                ...s,
                left: r.left + r.width / 2,
                top: r.top - gap,
                transform: 'translate(-50%, -100%)',
            };
        case 'bottom':
            return {
                ...s,
                left: r.left + r.width / 2,
                top: r.bottom + gap,
                transform: 'translate(-50%, 0)',
            };
        case 'left':
            return {
                ...s,
                left: r.left - gap,
                top: r.top + r.height / 2,
                transform: 'translate(-100%, -50%)',
            };
        case 'right':
        default:
            return {
                ...s,
                left: r.right + gap,
                top: r.top + r.height / 2,
                transform: 'translate(0, -50%)',
            };
    }
};

Tooltip.propTypes = {
    /** The tooltip content (string, number, or JSX). */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,

    /** Tooltip position relative to the trigger. */
    position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Child element(s) that trigger the tooltip on hover. */
    children: PropTypes.node.isRequired,

    /** Disable tooltip display when true. */
    disabled: PropTypes.bool,

    /** Fixed width in pixels (forces wrapping). */
    width: PropTypes.number,

    /** Maximum width before wrapping occurs. */
    maxWidth: PropTypes.number,

    /** Font size for tooltip text (in px). */
    fontSize: PropTypes.number,

    /** Line height for tooltip text. */
    lineHeight: PropTypes.number,

    /** Padding inside tooltip (CSS shorthand string). */
    padding: PropTypes.string,

    /** Text alignment inside tooltip. */
    textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};
