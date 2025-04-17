import React from 'react';
import { propTypes } from './props';
import { StyledContainer } from './styled';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { RadioSection } from '../RadioSection';
import { Button } from '../Button';
import { IconGraph } from '@/assets';
import { ButtonVarients } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const WhiteLabelSideBar = ({ translation }) => (
    <StyledContainer>
        <StyledText
            color={theme.color.gray_646464}
            fontWeight={theme.fontWeights[500]}
            marginRight={6}
            marginBottom={17}
        >
            {translation?.PREMIUM_SETTINGS || TEXT_DICTIONARY?.PREMIUM_SETTINGS}
        </StyledText>
        <RadioSection text={TEXT_DICTIONARY?.SHOW_BRANDING} />

        <StyledText
            fontSize={12}
            color={theme.color.gray_333}
            marginTop={16}
            marginBottom={30}
            lineHeight={'20px'}
        >
            {translation?.UNLOCK_PREMIUM_FEATURE_PARAGRAPH ||
                TEXT_DICTIONARY?.UNLOCK_PREMIUM_FEATURE_PARAGRAPH}
        </StyledText>
        <Button
            text={translation?.UPGRADE_PLAN || TEXT_DICTIONARY?.UPGRADE_PLAN}
            left={<StyledImage src={IconGraph} />}
            varient={ButtonVarients.primary}
        />
    </StyledContainer>
);

WhiteLabelSideBar.propTypes = propTypes;
