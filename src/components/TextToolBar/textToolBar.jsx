import React, { useMemo } from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { DropDown } from '../DropDown';
import { Label, RowContainer } from './styled';
import {
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconLineThrough,
    IconOpacity,
    IconTextItalic,
    IconTextSmall,
    IconTextUnderLine,
} from '@/assets';
import theme from '@/theme';
import { ColorBox } from '../ColorBox';
import { StyledImage, StyledText } from '@/generic/Styled';
import { ToolsTabBar } from '../ToolsTabBar';
import { topTabBarpadding } from '@/constants/layoutConstants';

export const TextToolBar = () => {
    let TextTabsData = useMemo(() => {
        return [
            {
                element: <StyledImage src={IconBold} />,
            },
            {
                element: <StyledImage src={IconTextItalic} />,
            },
            {
                element: <StyledImage src={IconLineThrough} />,
            },
            {
                element: <StyledImage src={IconTextUnderLine} />,
            },
        ];
    }, []);

    let AlignmentTabsData = useMemo(() => {
        return [
            {
                element: <StyledImage src={IconAlignLeft} />,
            },
            {
                element: <StyledImage src={IconAlignCenter} />,
            },
            {
                element: <StyledImage src={IconAlignRight} />,
            },
        ];
    }, []);

    return (
        <RowContainer>
            <DropDown gap={40} left={<Label>Inter</Label>} />
            <DropDown gap={11} left={<Label>16</Label>} />

            <ToolBarButtonWrapper gap={12}>
                <StyledImage src={IconTextSmall} />
                <ColorBox backgroundColor={theme.color.black} />
            </ToolBarButtonWrapper>
            <ToolsTabBar
                tabsData={TextTabsData}
                marginRight={12}
                height={40}
                tabPadding={topTabBarpadding}
            />
            <ToolsTabBar
                tabsData={AlignmentTabsData}
                marginRight={20}
                height={40}
                tabPadding={topTabBarpadding}
            />
            <ToolBarButtonWrapper gap={12}>
                <StyledImage src={IconOpacity} />
                <StyledText fontFamily={theme.fonts.secondary}>100%</StyledText>
            </ToolBarButtonWrapper>
        </RowContainer>
    );
};

TextToolBar.propTypes = propTypes;
