import React from 'react';
import { propTypes } from './props';
import { TabBarContainer, TabItem } from './styled';
import { Tooltip } from '../Tooltip';

export const ToolsTabBar = ({
    tabsData = [],
    height = 36,
    tabPadding = '8px 12px',
    marginRight = 0,
    disabled = false,
    tooltipPosition = 'bottom',
}) => (
    <TabBarContainer disabled={disabled} height={height} marginRight={marginRight}>
        {tabsData.map((item, index) => (
            <Tooltip
                key={index}
                position={tooltipPosition}
                text={item?.tooltip}
                disabled={item?.disabled}
            >
                <TabItem
                    key={index}
                    tabPadding={tabPadding}
                    isLast={index === tabsData.length - 1}
                    isFirst={index === 0}
                    onClick={item?.onClick}
                    disabled={item?.disabled}
                    selected={item?.selected}
                >
                    {item?.element}
                </TabItem>
            </Tooltip>
        ))}
    </TabBarContainer>
);

ToolsTabBar.propTypes = propTypes;
