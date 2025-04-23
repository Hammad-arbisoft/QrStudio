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
import { elementTypes } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const BottomToolBarControls = ({
    onDeleteSelectedElement,
    onCopySelectedElement,
    onToggleLockElement,
    selectedElement,
    bringSelectedElementToFront,
    sendSelectedElementToBack,
    languageLocale,
}) => {
    let BringFrontBackTabsData = [
        {
            element: <StyledImage src={IconBringFront} />,
            onClick: () => {
                bringSelectedElementToFront && bringSelectedElementToFront();
            },
            tooltip: TEXT_DICTIONARY?.[languageLocale]?.BRING_FORWARD,
        },
        {
            element: <StyledImage src={IconSentBack} />,
            onClick: () => {
                sendSelectedElementToBack && sendSelectedElementToBack();
            },
            tooltip: TEXT_DICTIONARY?.[languageLocale]?.SEND_BACKWARD,
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
                        ? TEXT_DICTIONARY?.[languageLocale]?.LOCK
                        : TEXT_DICTIONARY?.[languageLocale]?.UNLOCK
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
            {selectedElement?.type !== elementTypes?.qr && (
                <ToolBarButtonWrapper
                    tooltip={TEXT_DICTIONARY?.[languageLocale]?.COPY}
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
            )}
            <ToolBarButtonWrapper
                tooltip={TEXT_DICTIONARY?.[languageLocale]?.DELETE}
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
