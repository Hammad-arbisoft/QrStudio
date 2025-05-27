import React from 'react';
import { propTypes } from './props';
import { SideBarIcon, SideBarItem, SideBarText } from './styled';
import theme from '@/theme';

export const SideBarPill = ({
    isSelected = false,
    onClick = () => {},
    icon,
    text,
    pillActiveColor,
    id
}) => (
    <SideBarItem
        key={id}
        isSelected={isSelected}
        onClick={() => onClick()}
        pillActiveColor={pillActiveColor || theme.color.primary}
    >
        <SideBarIcon src={icon} isSelected={isSelected} />
        <SideBarText isSelected={isSelected}>{text}</SideBarText>
    </SideBarItem>
);

SideBarPill.propTypes = propTypes;
