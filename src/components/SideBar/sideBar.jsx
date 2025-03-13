import React, { useCallback, useMemo } from 'react';
import { propTypes } from './props';
import { SideBarWrapper } from './styled';
import { sideBarItems } from './helper';
import { SideBarPill } from '../SideBarPill';

export const SideBar = ({ selectedSideBarItem, onClickPill = () => {} }) => {
    const onClickSinglePill = useCallback(
        e => {
            onClickPill(e);
        },
        [onClickPill],
    );

    const renderPills = useMemo(
        () =>
            sideBarItems?.map(item => (
                <SideBarPill
                    key={item?.id}
                    isSelected={selectedSideBarItem === item?.id}
                    onClick={() => onClickSinglePill(item?.id)}
                    icon={item?.icon}
                    text={item?.text}
                />
            )),
        [selectedSideBarItem, onClickSinglePill],
    );

    return <SideBarWrapper>{renderPills}</SideBarWrapper>;
};

SideBar.propTypes = propTypes;
