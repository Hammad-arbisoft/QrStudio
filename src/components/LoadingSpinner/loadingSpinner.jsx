import React from 'react';
import { propTypes } from './props';
import { Spinner, SpinnerWrapper } from './styled';

export const LoadingSpinner = ({ size = '40px', color = '#007bff', borderWidth = '4px' }) => (
    <SpinnerWrapper>
        <Spinner size={size} color={color} borderWidth={borderWidth} />
    </SpinnerWrapper>
);

LoadingSpinner.propTypes = propTypes;
