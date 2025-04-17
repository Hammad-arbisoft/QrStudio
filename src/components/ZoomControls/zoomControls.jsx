import React from 'react';
import { propTypes } from './props';
import { Container, Divider, ZoomButton, ZoomControlWrapper, ZoomPercentage } from './styled';
import { StyledImage } from '@/generic/Styled';
import { IconZoomIn, IconZoomOut } from '@/assets';
import { Tooltip } from '../Tooltip';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const ZoomControls = ({ zoomLevel = 60, onZoomIn, onZoomOut, translation }) => (
    <Container>
        <Tooltip text={translation?.ZOOM_IN_OUT || TEXT_DICTIONARY?.ZOOM_IN_OUT} position="top">
            <ZoomControlWrapper>
                <ZoomButton onClick={onZoomIn}>
                    <StyledImage src={IconZoomIn} />
                </ZoomButton>
                <Divider />
                <ZoomPercentage>{zoomLevel}%</ZoomPercentage>
                <Divider />
                <ZoomButton onClick={onZoomOut}>
                    <StyledImage src={IconZoomOut} />
                </ZoomButton>
            </ZoomControlWrapper>
        </Tooltip>
    </Container>
);

ZoomControls.propTypes = propTypes;
