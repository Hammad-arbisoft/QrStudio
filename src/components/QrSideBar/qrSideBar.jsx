import React from 'react';
import { propTypes } from './props';
import { StyledContainer } from './styled';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { RadioSection } from '../RadioSection';
import { Button } from '../Button';
import { IconAddImage, IconUpload } from '@/assets';

export const QrSideBar = () => (
    <StyledContainer>
        <StyledText
            color={theme.color.gray_646464}
            fontWeight={theme.fontWeights[500]}
            marginRight={6}
            marginBottom={17}
        >
            Settings
        </StyledText>
        <RadioSection text="Show Logo in QR Code" />
        <Button
            text="Add Logo"
            left={<StyledImage src={IconUpload} />}
            marginBottom={30}
            marginTop={24}
        />
        <StyledImage src={IconAddImage} height={89} width={89} />
    </StyledContainer>
);

QrSideBar.propTypes = propTypes;
