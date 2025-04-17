import React from 'react';
import { propTypes } from './props';
import { ZoomControls } from '../ZoomControls';
import { BottomToolBarControls } from '../BottomToolBarControls';
import { BottomToolbarWrapper } from './styled';
import { UndoRedoControls } from '../UndoRedoControls';

export const BottomToolBar = ({
    selectedTab,
    zoomPercentage,
    onChangeZoomPercentage,
    onUndo,
    onRedo,
    disableUndo,
    disableRedo,
    selectedElement,
    onDeleteSelectedElement,
    onCopySelectedElement,
    onToggleLockElement,
    bringSelectedElementToFront,
    sendSelectedElementToBack,
    translation,
}) => {
    const onZoomIn = () => {
        if (zoomPercentage < 300) {
            onChangeZoomPercentage(zoomPercentage + 10);
        }
    };
    const onZoomOut = () => {
        if (zoomPercentage > 20) {
            onChangeZoomPercentage(zoomPercentage - 10);
        }
    };
    return (
        <BottomToolbarWrapper selectedTab={selectedTab}>
            {selectedTab && (
                <>
                    <UndoRedoControls
                        onUndo={onUndo}
                        onRedo={onRedo}
                        disableUndo={disableUndo}
                        disableRedo={disableRedo}
                        translation={translation}
                    />
                    {selectedElement ? (
                        <BottomToolBarControls
                            onDeleteSelectedElement={onDeleteSelectedElement}
                            onCopySelectedElement={onCopySelectedElement}
                            onToggleLockElement={onToggleLockElement}
                            selectedElement={selectedElement}
                            bringSelectedElementToFront={bringSelectedElementToFront}
                            sendSelectedElementToBack={sendSelectedElementToBack}
                            translation={translation}
                        />
                    ) : (
                        <div style={{ height: 63 }} />
                    )}
                </>
            )}
            <ZoomControls
                zoomLevel={zoomPercentage}
                onZoomIn={onZoomIn}
                onZoomOut={onZoomOut}
                translation={translation}
            />
        </BottomToolbarWrapper>
    );
};

BottomToolBar.propTypes = propTypes;
