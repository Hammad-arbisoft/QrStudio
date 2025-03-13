import React, { useMemo } from 'react';
import { propTypes } from './props';
import { ToolBarContainer } from './styled';
import { ToolsTabBar } from '../ToolsTabBar';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { StyledImage } from '@/generic/Styled';
import {
    IconBringFront,
    IconCopy,
    IconDelete,
    IconGroup,
    IconGuide,
    IconLock,
    IconSentBack,
} from '@/assets';

export const BottomToolBarControls = () => {
    let BringFrontBackTabsData = useMemo(() => {
        return [
            {
                element: <StyledImage src={IconBringFront} />,
            },
            {
                element: <StyledImage src={IconSentBack} />,
            },
        ];
    }, []);

    return (
        <ToolBarContainer>
            <ToolsTabBar tabsData={BringFrontBackTabsData} />
            <ToolBarButtonWrapper
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
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
            >
                <StyledImage src={IconLock} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
            >
                <StyledImage src={IconCopy} />
            </ToolBarButtonWrapper>
            <ToolBarButtonWrapper
                paddingRight={14.6}
                paddingLeft={14.6}
                height={36}
                marginRight={0}
            >
                <StyledImage src={IconDelete} />
            </ToolBarButtonWrapper>
        </ToolBarContainer>
    );
};

BottomToolBarControls.propTypes = propTypes;
