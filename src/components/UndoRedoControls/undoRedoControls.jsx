import React from 'react';
import { propTypes } from './props';
import { ToolsTabBar } from '../ToolsTabBar';
import { StyledImage } from '@/generic/Styled';
import { IconRedo, IconUndo } from '@/assets';

export const UndoRedoControls = ({ onUndo, onRedo, disableUndo, disableRedo }) => {
    let UndeRedoTabsData = [
        {
            element: <StyledImage src={IconUndo} />,
            onClick: () => onUndo(),
            disabled: disableUndo,
        },
        {
            element: <StyledImage src={IconRedo} />,
            onClick: () => onRedo(),
            disabled: disableRedo,
        },
    ];

    return <ToolsTabBar height={44} tabPadding="12px 17px" tabsData={UndeRedoTabsData} />;
};

UndoRedoControls.propTypes = propTypes;
