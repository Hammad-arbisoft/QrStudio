import React, { useMemo } from 'react';
import { propTypes } from './props';
import { StyledContainer } from './styled';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { RadioSection } from '../RadioSection';
import { Button } from '../Button';
import { IconUpload } from '@/assets';
import { elementTypes } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const QrSideBar = ({
    toggleQr,
    qrPresent,
    toggleQrLogo,
    addQrLogo,
    elements,
    qrLogo,
    languageLocale,
}) => {
    let logoVisible = useMemo(() => {
        let index = elements?.findIndex(e => e?.type === elementTypes?.qr);
        if (index < 0) {
            return false;
        }
        return elements?.[index]?.logoVisible;
    }, [elements]);
    return (
        <StyledContainer>
            <StyledText
                color={theme.color.gray_646464}
                fontWeight={theme.fontWeights[500]}
                marginRight={6}
                marginBottom={17}
            >
                {TEXT_DICTIONARY?.[languageLocale]?.SETTINGS}
            </StyledText>
            <RadioSection
                text={TEXT_DICTIONARY?.[languageLocale]?.SHOW_QR_CODE}
                isActive={qrPresent}
                onToggle={toggleQr}
            />
            <RadioSection
                text={TEXT_DICTIONARY?.[languageLocale]?.SHOW_LOGO_IN_QR}
                isActive={qrPresent && logoVisible}
                onToggle={toggleQrLogo}
                disabled={!qrPresent}
            />

            <Button
                text={TEXT_DICTIONARY?.[languageLocale]?.ADD_LOGO}
                left={<StyledImage src={IconUpload} />}
                marginBottom={30}
                marginTop={24}
                onClick={addQrLogo}
            />
            {qrLogo && <StyledImage src={qrLogo} height={89} width={89} />}
        </StyledContainer>
    );
};

QrSideBar.propTypes = propTypes;
