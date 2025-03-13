import React from 'react';
import { propTypes } from './props';
import { ToolBarWrapper } from './styled';
import { TemplateToolBar } from '../TemplateToolBar';
// import { TextToolBar } from '../TextToolBar';
// import { ImageToolBar } from '../ImageToolBar';
// import { ShapeToolBar } from '../ShapeToolBar';
// import { QrToolBar } from '../QrToolBar';

export const TopToolBar = () => {
    return (
        <ToolBarWrapper>
            <TemplateToolBar />
            {/* <TextToolBar /> */}
            {/* <ImageToolBar /> */}
            {/* <ShapeToolBar /> */}
            {/* <QrToolBar /> */}
        </ToolBarWrapper>
    );
};

TopToolBar.propTypes = propTypes;
