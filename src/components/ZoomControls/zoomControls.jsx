import React from 'react';
import { propTypes } from './props';
import { Container, Divider, ZoomButton, ZoomControlWrapper, ZoomPercentage } from './styled';
import { StyledImage } from '@/generic/Styled';
import { IconZoomIn, IconZoomOut } from '@/assets';
import { Tooltip } from '../Tooltip';
import { TEXT_DICTIONARY } from '@/constants/textConstants';
import { Button } from '../Button';
import { ButtonVarients } from '@/constants';

export const ZoomControls = ({
    zoomLevel = 60,
    onZoomIn,
    onZoomOut,
    languageLocale,
    onSave,
    showSaveButton,
    saveButtonText,
}) => (
    <Container>
        {showSaveButton && (
            <Button
                text={saveButtonText || TEXT_DICTIONARY?.[languageLocale]?.SAVE}
                varient={ButtonVarients?.primary}
                marginBottom={10}
                style={{ position: 'absolute', top: -50, zIndex: 400, right: 0 }}
                onClick={onSave}
            />
        )}
        <Tooltip text={TEXT_DICTIONARY?.[languageLocale]?.ZOOM_IN_OUT} position="top">
            <ZoomControlWrapper>
                <ZoomButton onClick={onZoomOut}>
                    <StyledImage src={IconZoomOut} />
                </ZoomButton>
                <Divider />
                <ZoomPercentage>{zoomLevel}%</ZoomPercentage>
                <Divider />
                <ZoomButton onClick={onZoomIn}>
                    <StyledImage src={IconZoomIn} />
                </ZoomButton>
            </ZoomControlWrapper>
        </Tooltip>
    </Container>
);

ZoomControls.propTypes = propTypes;
