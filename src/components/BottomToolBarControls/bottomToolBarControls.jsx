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
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const BottomToolBarControls = ({
    onDeleteSelectedElement,
    onCopySelectedElement,
    onToggleLockElement,
    selectedElement,
    bringSelectedElementToFront,
    sendSelectedElementToBack,
    translation,
}) => {
    let BringFrontBackTabsData = [
        {
            element: <StyledImage src={IconBringFront} />,
            onClick: () => {
                bringSelectedElementToFront && bringSelectedElementToFront();
            },
            tooltip: translation?.BRING_FORWARD || TEXT_DICTIONARY?.BRING_FORWARD,
        },
        {
            element: <StyledImage src={IconSentBack} />,
            onClick: () => {
                sendSelectedElementToBack && sendSelectedElementToBack();
            },
            tooltip: translation?.SEND_BACKWARD || TEXT_DICTIONARY?.SEND_BACKWARD,
        },
    ];

    return (
        <ToolBarContainer>
            <ToolsTabBar
                disabled={!selectedElement?.draggable}
                tabsData={BringFrontBackTabsData}
                tooltipPosition="top"
            />
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
                tooltip={
                    selectedElement?.draggable
                        ? translation?.LOCK || TEXT_DICTIONARY?.LOCK
                        : translation?.UNLOCK || TEXT_DICTIONARY?.UNLOCK
                }
                tooltipPosition="top"
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
                tooltip={translation?.COPY || TEXT_DICTIONARY?.COPY}
                tooltipPosition="top"
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
                tooltip={translation?.DELETE || TEXT_DICTIONARY?.DELETE}
                tooltipPosition="top"
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
