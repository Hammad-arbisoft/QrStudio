import React from 'react';
import { propTypes } from './props';
import { ToolsTabBar } from '../ToolsTabBar';
import { StyledImage } from '@/generic/Styled';
import { IconRedo, IconUndo } from '@/assets';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const UndoRedoControls = ({ onUndo, onRedo, disableUndo, disableRedo, languageLocale }) => {
    let UndeRedoTabsData = [
        {
            element: <StyledImage src={IconUndo} />,
            onClick: () => onUndo(),
            disabled: disableUndo,
            tooltip: TEXT_DICTIONARY?.[languageLocale]?.UNDO,
        },
        {
            element: <StyledImage src={IconRedo} />,
            onClick: () => onRedo(),
            disabled: disableRedo,
            tooltip: TEXT_DICTIONARY?.[languageLocale]?.REDO,
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
