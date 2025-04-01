import React from 'react';
import { propTypes } from './props';
import { ToolBarContainer } from './styled';
import { ToolsTabBar } from '../ToolsTabBar';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { StyledImage } from '@/generic/Styled';
import {
    IconBringFront,
    IconCopy,
    IconDelete,
    // IconGroup,
    // IconGuide,
    IconLock,
    IconSentBack,
    IconUnlock,
} from '@/assets';

export const BottomToolBarControls = ({
    onDeleteSelectedElement,
    onCopySelectedElement,
    onToggleLockElement,
    selectedElement,
    bringSelectedElementToFront,
    sendSelectedElementToBack,
}) => {
    let BringFrontBackTabsData = [
        {
            element: <StyledImage src={IconBringFront} />,
            onClick: () => {
                bringSelectedElementToFront && bringSelectedElementToFront();
            },
        },
        {
            element: <StyledImage src={IconSentBack} />,
            onClick: () => {
                sendSelectedElementToBack && sendSelectedElementToBack();
            },
        },
    ];

    return (
        <ToolBarContainer>
            <ToolsTabBar disabled={!selectedElement?.draggable} tabsData={BringFrontBackTabsData} />
            {/* <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
            >
                <StyledImage src={IconGuide} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
            >
                <StyledImage src={IconGroup} />
            </ToolBarButtonWrapper> */}
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
                onClick={onToggleLockElement}
            >
                <StyledImage
                    src={selectedElement?.draggable ? IconUnlock : IconLock}
                    height={20}
                    width={20}
                />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
                onClick={onCopySelectedElement}
                disabled={!selectedElement?.draggable}
            >
                <StyledImage src={IconCopy} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
                onClick={onDeleteSelectedElement}
                disabled={!selectedElement?.draggable}
            >
                <StyledImage src={IconDelete} />
            </ToolBarButtonWrapper>
        </ToolBarContainer>
    );
};

BottomToolBarControls.propTypes = propTypes;
