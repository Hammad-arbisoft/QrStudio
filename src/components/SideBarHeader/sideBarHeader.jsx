import React from 'react';
import { propTypes } from './props';
import { Container, IconWrapper } from './styled';
import theme from '@/theme';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconChevronLeft } from '@/assets';
import { sideBarpillsText } from '@/constants';

export const SideBarHeader = ({ onCollapse = () => {}, selectedSideBarItem }) => (
    <Container>
        <StyledText
            fontWeight={theme.fontWeights[600]}
            color={theme.color.gray_545454}
            fontSize={16}
        >
            {sideBarpillsText?.[selectedSideBarItem]}
        </StyledText>
        <IconWrapper onClick={onCollapse}>
            <StyledImage src={IconChevronLeft} />
        </IconWrapper>
    </Container>
);

SideBarHeader.propTypes = propTypes;
