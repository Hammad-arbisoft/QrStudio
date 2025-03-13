import React, { useCallback, useState } from 'react';
import { propTypes } from './props';
import { StudioWrapper } from './styled';
import { Editor, HelperSideBar, SideBar } from '@/components';

export const Studio = ({ title = 'untitled' }) => {
    const [selectedTab, setSelectedTab] = useState(null);

    const onSelectedTab = useCallback(
        tab => {
            setSelectedTab(tab);
        },
        [setSelectedTab],
    );

    return (
        <StudioWrapper>
            <SideBar selectedSideBarItem={selectedTab} onClickPill={onSelectedTab} />
            <HelperSideBar />
            <Editor selectedTab={selectedTab} title={title} />
        </StudioWrapper>
    );
};

Studio.propTypes = propTypes;
