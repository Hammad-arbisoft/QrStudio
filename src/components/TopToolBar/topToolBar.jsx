import React from 'react';
import { propTypes } from './props';
import { ToolBarWrapper } from './styled';
import { TemplateToolBar } from '../TemplateToolBar';
import { TextToolBar } from '../TextToolBar';
import { sideBarpillsList } from '@/constants';
import { ImageToolBar } from '../ImageToolBar';
import { ShapeToolBar } from '../ShapeToolBar';
import { QrToolBar } from '../QrToolBar';

export const TopToolBar = ({ selectedTab }) => {
    return (
        <ToolBarWrapper>
            {selectedTab === sideBarpillsList?.template ? (
                <TemplateToolBar />
            ) : selectedTab === sideBarpillsList?.text ? (
                <TextToolBar />
            ) : selectedTab === sideBarpillsList?.image ? (
                <ImageToolBar />
            ) : selectedTab === sideBarpillsList?.shape ? (
                <ShapeToolBar />
            ) : selectedTab === sideBarpillsList?.qr ? (
                <QrToolBar />
            ) : null}
        </ToolBarWrapper>
    );
};

TopToolBar.propTypes = propTypes;
