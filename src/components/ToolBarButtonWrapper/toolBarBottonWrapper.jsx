import React from 'react';
import { propTypes } from './props';
import { StyledContainer } from './styled';

export const ToolBarButtonWrapper = ({
    height,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    children,
    marginLeft,
    marginRight,
    justifyContent,
    gap,
    onClick,
    disabled = false,
}) => (
    <StyledContainer
        height={height}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        marginLeft={marginLeft}
        marginRight={marginRight}
        justifyContent={justifyContent}
        gap={gap}
        onClick={() => {
            if (disabled) {
                return;
            }
            onClick && onClick();
        }}
        disabled={disabled}
    >
        {children}
    </StyledContainer>
);

ToolBarButtonWrapper.propTypes = propTypes;
