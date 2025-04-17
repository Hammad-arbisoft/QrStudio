import React from 'react';
import { propTypes } from './props';
import { Container, IconWrapper } from './styled';
import theme from '@/theme';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconChevronLeft } from '@/assets';
import { Tooltip } from '../Tooltip';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const SideBarHeader = ({ onCollapse = () => {}, selectedSideBarItem, translation }) => {
    const sideBarpillsText = {
        Template: translation?.TEMPLATE || TEXT_DICTIONARY?.TEMPLATE,
        Text: translation?.TEXT || TEXT_DICTIONARY?.TEXT,
        Image: translation?.IMAGE || TEXT_DICTIONARY?.IMAGE,
        Shape: translation?.SHAPE || TEXT_DICTIONARY?.SHAPE,
        QR: translation?.QR_CODE || TEXT_DICTIONARY?.QR_CODE,
        'White-label': translation?.BRANDING || TEXT_DICTIONARY?.BRANDING,
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
            <Tooltip text={translation?.TEMPLATE || TEXT_DICTIONARY?.COLLAPSE} position="left">
                <IconWrapper onClick={onCollapse}>
                    <StyledImage src={IconChevronLeft} />
                </IconWrapper>
            </Tooltip>
        </Container>
    );
};

SideBarHeader.propTypes = propTypes;
