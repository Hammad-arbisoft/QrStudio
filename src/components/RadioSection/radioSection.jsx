import React from 'react';
import { propTypes } from './props';
import { StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { Container, InfoContainer, ToggleCircle, ToggleContainer } from './styled';

export const RadioSection = ({ text, onToggle, isActive, disabled }) => {
    return (
        <Container>
            <InfoContainer>
                <StyledText
                    marginLeft={6}
                    color={theme.color.black}
                    fontSize={12}
                    fontWeight={theme.fontWeights[500]}
                >
                    {text}
                </StyledText>
            </InfoContainer>
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
