import React from 'react';
import { propTypes } from './props';
import { StyledContainer } from './styled';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { RadioSection } from '../RadioSection';
import { Button } from '../Button';
import { IconGraph } from '@/assets';
import { ButtonVarients } from '@/constants';

export const WhiteLabelSideBar = () => (
    <StyledContainer>
        <StyledText
            color={theme.color.gray_646464}
            fontWeight={theme.fontWeights[500]}
            marginRight={6}
            marginBottom={17}
        >
            premium settings
        </StyledText>
        <RadioSection text="Show Fixalert Branding" />

        <StyledText
            fontSize={12}
            color={theme.color.gray_333}
            marginTop={16}
            marginBottom={30}
            lineHeight={'20px'}
        >
            Unlock premium features to customize your QR code sticker by hiding the company logo and
            watermark. Upgrade your plan for full control over your design.
        </StyledText>
        <Button
            text="Upgrade your plan"
            left={<StyledImage src={IconGraph} />}
            varient={ButtonVarients.primary}
        />
    </StyledContainer>
);

WhiteLabelSideBar.propTypes = propTypes;
