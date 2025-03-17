import React, { useState } from 'react';
import { propTypes } from './props';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconInfo } from '@/assets';
import theme from '@/theme';
import { Container, InfoContainer, ToggleCircle, ToggleContainer } from './styled';

export const RadioSection = ({ text }) => {
    const [isActive, setIsActive] = useState(true);
    return (
        <Container>
            <InfoContainer>
                <StyledImage src={IconInfo} />
                <StyledText
                    marginLeft={6}
                    color={theme.color.black}
                    fontSize={12}
                    fontWeight={theme.fontWeights[500]}
                >
                    {text}
                </StyledText>
            </InfoContainer>
            <ToggleContainer isActive={isActive} onClick={() => setIsActive(!isActive)}>
                <ToggleCircle isActive={isActive} />
            </ToggleContainer>
        </Container>
    );
};

RadioSection.propTypes = propTypes;
