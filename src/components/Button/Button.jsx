import React from 'react';
import { propTypes } from './props';
import theme from '@/theme';
import { StyledText } from '@/generic/Styled';
import { ButtonVarients } from '@/constants';
import { IconWrapper, StyledButton } from './styled';

export const Button = ({
    varient = ButtonVarients.secondary,
    left,
    text,
    marginBottom = 0,
    marginTop = 0,
    onClick,
    style,
}) => (
    <StyledButton
        varient={varient}
        marginTop={marginTop}
        marginBottom={marginBottom}
        onClick={onClick}
        style={style}
    >
        {left && <IconWrapper>{left}</IconWrapper>}
        <StyledText
            fontSize={14}
            fontWeight={theme.fontWeights[600]}
            color={varient === ButtonVarients.primary ? theme.color.white : theme.color.primary}
        >
            {text}
        </StyledText>
    </StyledButton>
);

Button.propTypes = propTypes;
