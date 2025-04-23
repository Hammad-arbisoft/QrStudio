import React from 'react';
import { propTypes } from './props';
import { Container, IconWrapper } from './styled';
import theme from '@/theme';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconChevronLeft } from '@/assets';
import { Tooltip } from '../Tooltip';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const SideBarHeader = ({ onCollapse = () => {}, selectedSideBarItem, languageLocale }) => {
    const sideBarpillsText = {
        Template: TEXT_DICTIONARY?.[languageLocale]?.TEMPLATE,
        Text: TEXT_DICTIONARY?.[languageLocale]?.TEXT,
        Image: TEXT_DICTIONARY?.[languageLocale]?.IMAGE,
        Shape: TEXT_DICTIONARY?.[languageLocale]?.SHAPE,
        QR: TEXT_DICTIONARY?.[languageLocale]?.QR_CODE,
        'White-label': TEXT_DICTIONARY?.[languageLocale]?.BRANDING,
    };
    return (
        <Container>
            <StyledText
                fontWeight={theme.fontWeights[600]}
                color={theme.color.gray_545454}
                fontSize={16}
            >
                {sideBarpillsText?.[selectedSideBarItem]}
            </StyledText>
            <Tooltip text={TEXT_DICTIONARY?.[languageLocale]?.COLLAPSE} position="left">
                <IconWrapper onClick={onCollapse}>
                    <StyledImage src={IconChevronLeft} />
                </IconWrapper>
            </Tooltip>
        </Container>
    );
};

SideBarHeader.propTypes = propTypes;
