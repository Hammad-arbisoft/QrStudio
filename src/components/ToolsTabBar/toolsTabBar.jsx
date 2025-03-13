import React from 'react';
import { propTypes } from './props';
import { TabBarContainer, TabItem } from './styled';

export const ToolsTabBar = ({
    tabsData = [],
    height = 36,
    tabPadding = '8px 12px',
    marginRight = 0,
}) => (
    <TabBarContainer height={height} marginRight={marginRight}>
        {tabsData.map((item, index) => (
            <TabItem
                key={index}
                tabPadding={tabPadding}
                isLast={index === tabsData.length - 1}
                onClick={item?.onClick}
            >
                {item?.element}
            </TabItem>
        ))}
    </TabBarContainer>
);

ToolsTabBar.propTypes = propTypes;
