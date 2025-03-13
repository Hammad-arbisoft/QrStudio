import React from 'react';
import { propTypes } from './props';
import { SideBarIcon, SideBarItem, SideBarText } from './styled';

export const SideBarPill = ({
    key,
    isSelected = false,
    onClick = () => {},
    icon,
    text = 'Text',
}) => (
    <SideBarItem key={key} isSelected={isSelected} onClick={() => onClick()}>
        <SideBarIcon src={icon} isSelected={isSelected} />
        <SideBarText isSelected={isSelected}>{text}</SideBarText>
    </SideBarItem>
);

SideBarPill.propTypes = propTypes;
