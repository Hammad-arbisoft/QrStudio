import React from 'react';
import { propTypes } from './props';
import { SideBarIcon, SideBarItem, SideBarText } from './styled';
import theme from '@/theme';

export const SideBarPill = ({
    key,
    isSelected = false,
    onClick = () => {},
    icon,
    text,
    pillActiveColor,
}) => (
    <SideBarItem
        key={key}
        isSelected={isSelected}
        onClick={() => onClick()}
        pillActiveColor={pillActiveColor || theme.color.primary}
    >
        <SideBarIcon src={icon} isSelected={isSelected} />
        <SideBarText isSelected={isSelected}>{text}</SideBarText>
    </SideBarItem>
);

SideBarPill.propTypes = propTypes;
