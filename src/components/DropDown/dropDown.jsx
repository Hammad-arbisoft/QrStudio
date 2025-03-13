import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { IconDropDown } from '@/assets';
import { DropDownItem, IconWrapper } from './styled';

export const DropDown = ({ left, right, center, gap, paddingLeft, paddingRight }) => (
    <ToolBarButtonWrapper
        justifyContent={center ? 'space-between' : 'center'}
        gap={gap}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
    >
        <DropDownItem>{left}</DropDownItem>
        <DropDownItem>{center}</DropDownItem>
        <DropDownItem>{right ? right : <IconWrapper src={IconDropDown} />}</DropDownItem>
    </ToolBarButtonWrapper>
);

DropDown.propTypes = propTypes;
