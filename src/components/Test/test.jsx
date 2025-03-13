import React from 'react';
import Button from './styled';
import { propTypes } from './props';

export const Test = ({ color }) => <Button color={color}>Click Me </Button>;
Test.propTypes = propTypes;
