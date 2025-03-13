import React from 'react';
import { propTypes } from './props';
import { Box } from './styled';

export const ColorBox = ({ backgroundColor }) => <Box backgroundColor={backgroundColor} />;

ColorBox.propTypes = propTypes;
