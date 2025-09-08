import React from 'react';
import { propTypes } from './props';
import { StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { Container, InfoContainer, ToggleCircle, ToggleContainer } from './styled';

export const RadioSection = ({ text, onToggle, isActive, disabled }) => {
    const renderText = () => {
        if (React.isValidElement(text)) {
            // If it's JSX, render directly
            return text;
        }
        // Otherwise treat as string
        return (
            <StyledText
                marginLeft={6}
                color={theme.color.black}
                fontSize={12}
                fontWeight={theme.fontWeights[500]}
            >
                {text}
            </StyledText>
        );
    };

    return (
        <Container>
            <InfoContainer>{renderText()}</InfoContainer>
            <ToggleContainer
                isActive={isActive}
                onClick={() => {
                    if (disabled) {
                        return;
                    }
                    onToggle && onToggle();
                }}
            >
                <ToggleCircle isActive={isActive} />
            </ToggleContainer>
        </Container>
    );
};

RadioSection.propTypes = propTypes;
