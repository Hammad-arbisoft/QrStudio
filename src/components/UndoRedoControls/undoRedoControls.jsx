import React, { useMemo } from 'react';
import { propTypes } from './props';
import { ToolsTabBar } from '../ToolsTabBar';
import { StyledImage } from '@/generic/Styled';
import { IconRedo, IconUndo } from '@/assets';

export const UndoRedoControls = () => {
    let UndeRedoTabsData = useMemo(() => {
        return [
            {
                element: <StyledImage src={IconUndo} />,
            },
            {
                element: <StyledImage src={IconRedo} />,
            },
        ];
    }, []);

    return <ToolsTabBar height={44} tabPadding="12px 17px" tabsData={UndeRedoTabsData} />;
};

UndoRedoControls.propTypes = propTypes;
