import React from 'react';
import { propTypes } from './props';
import { ToolsTabBar } from '../ToolsTabBar';
import { StyledImage } from '@/generic/Styled';
import { IconRedo, IconUndo } from '@/assets';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const UndoRedoControls = ({ onUndo, onRedo, disableUndo, disableRedo, translation }) => {
    let UndeRedoTabsData = [
        {
            element: <StyledImage src={IconUndo} />,
            onClick: () => onUndo(),
            disabled: disableUndo,
            tooltip: translation?.UNDO || TEXT_DICTIONARY?.UNDO,
        },
        {
            element: <StyledImage src={IconRedo} />,
            onClick: () => onRedo(),
            disabled: disableRedo,
            tooltip: translation?.REDO || TEXT_DICTIONARY?.REDO,
        },
    ];

    return (
        <ToolsTabBar
            height={44}
            tabPadding="12px 17px"
            tabsData={UndeRedoTabsData}
            tooltipPosition="top"
        />
    );
};

UndoRedoControls.propTypes = propTypes;
