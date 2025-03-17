import React from 'react';
import { propTypes } from './props';
import { ZoomControls } from '../ZoomControls';
import { BottomToolBarControls } from '../BottomToolBarControls';
import { BottomToolbarWrapper } from './styled';
import { UndoRedoControls } from '../UndoRedoControls';

export const BottomToolBar = ({ selectedTab }) => {
    return (
        <BottomToolbarWrapper selectedTab={selectedTab}>
            {selectedTab && (
                <>
                    <UndoRedoControls />
                    <BottomToolBarControls />
                </>
            )}
            <ZoomControls />
        </BottomToolbarWrapper>
    );
};

BottomToolBar.propTypes = propTypes;
