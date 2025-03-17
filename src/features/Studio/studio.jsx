import React, { useCallback, useState } from 'react';
import { propTypes } from './props';
import { StudioWrapper } from './styled';
import { Editor, HelperSideBar, SideBar } from '@/components';

export const Studio = ({ title = 'untitled' }) => {
    const [selectedTab, setSelectedTab] = useState(null);
    const [helperSideBarVisible, setHelperSideBarVisible] = useState(false);

    const onSelectedTab = useCallback(
        tab => {
            setSelectedTab(tab);
            setHelperSideBarVisible(true);
        },
        [setSelectedTab],
    );

    const onCollapseHelperSideBar = useCallback(() => {
        setHelperSideBarVisible(false);
    }, [setHelperSideBarVisible]);

    return (
        <StudioWrapper>
            <SideBar selectedSideBarItem={selectedTab} onClickPill={onSelectedTab} />
            <HelperSideBar
                selectedSideBarItem={selectedTab}
                onCollapse={onCollapseHelperSideBar}
                helperSideBarVisible={helperSideBarVisible}
            />
            <Editor selectedTab={selectedTab} title={title} />
        </StudioWrapper>
    );
};

Studio.propTypes = propTypes;
