import React from 'react';
import { propTypes } from './props';
import { Container, Divider, ZoomButton, ZoomControlWrapper, ZoomPercentage } from './styled';
import { StyledImage } from '@/generic/Styled';
import { IconZoomIn, IconZoomOut } from '@/assets';

export const ZoomControls = ({ zoomLevel = 60, onZoomIn, onZoomOut }) => (
    <Container>
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
    </Container>
);

ZoomControls.propTypes = propTypes;
