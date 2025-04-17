import React from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { DropDown } from '../DropDown';
import { Label, RowContainer } from './styled';
import {
    IconAlignCenter,
    IconAlignLeft,
    IconAlignRight,
    IconBold,
    IconDropDown,
    IconLineThrough,
    IconTextItalic,
    IconTextSmall,
    IconTextUnderLine,
} from '@/assets';
import theme from '@/theme';
import { ColorBox } from '../ColorBox';
import { StyledImage } from '@/generic/Styled';
import { ToolsTabBar } from '../ToolsTabBar';
import { topTabBarpadding } from '@/constants/layoutConstants';
import { OpacityPicker } from '../OpacityPicker';
import { fontFamilies } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const TextToolBar = ({
    fontFamily,
    fontSize,
    color,
    textDecoration,
    fontStyle,
    fontWeight,
    textAlign,
    textOpacity,
    onChangeTextProperty,
    translation,
}) => {
    let TextTabsData = [
        {
            element: <StyledImage src={IconBold} />,
            selected: fontWeight > theme?.fontWeights[500] || fontWeight === 'bold',
            onClick: () => {
                if (fontWeight > theme?.fontWeights[500] || fontWeight === 'bold') {
                    onChangeTextProperty('fontWeight', theme?.fontWeights[400]);
                } else {
                    onChangeTextProperty('fontWeight', theme?.fontWeights[700]);
                }
            },
            tooltip: translation?.BOLD || TEXT_DICTIONARY?.BOLD,
        },
        {
            element: <StyledImage src={IconTextItalic} />,
            selected: fontStyle === 'italic',
            onClick: () => {
                if (fontStyle === 'italic') {
                    onChangeTextProperty('fontStyle', 'normal');
                } else {
                    onChangeTextProperty('fontStyle', 'italic');
                }
            },
            tooltip: translation?.ITALIC || TEXT_DICTIONARY?.ITALIC,
        },
        {
            element: <StyledImage src={IconLineThrough} />,
            selected: textDecoration?.includes('line-through'),
            onClick: () => {
                if (textDecoration?.includes('line-through')) {
                    onChangeTextProperty(
                        'textDecoration',
                        textDecoration?.includes('underline') ? 'underline' : 'normal',
                    );
                } else {
                    onChangeTextProperty(
                        'textDecoration',
                        textDecoration?.includes('underline')
                            ? 'underline line-through'
                            : 'line-through',
                    );
                }
            },
            tooltip: translation?.LINE_THROUGH || TEXT_DICTIONARY?.LINE_THROUGH,
        },
        {
            element: <StyledImage src={IconTextUnderLine} />,
            selected: textDecoration?.includes('underline'),
            onClick: () => {
                if (textDecoration?.includes('underline')) {
                    onChangeTextProperty(
                        'textDecoration',
                        textDecoration?.includes('line-through') ? 'line-through' : 'normal',
                    );
                } else {
                    onChangeTextProperty(
                        'textDecoration',
                        textDecoration?.includes('line-through')
                            ? 'underline line-through'
                            : 'underline',
                    );
                }
            },
            tooltip: translation?.UNDERLINE || TEXT_DICTIONARY?.UNDERLINE,
        },
    ];

    let AlignmentTabsData = [
        {
            element: <StyledImage src={IconAlignLeft} />,
            selected: textAlign === 'left',
            onClick: () => {
                if (textAlign !== 'left') {
                    onChangeTextProperty('textAlign', 'left');
                }
            },
            tooltip: translation?.LEFT_ALIGN || TEXT_DICTIONARY?.LEFT_ALIGN,
        },
        {
            element: <StyledImage src={IconAlignCenter} />,
            selected: textAlign === 'center',
            onClick: () => {
                if (textAlign !== 'center') {
                    onChangeTextProperty('textAlign', 'center');
                }
            },
            tooltip: translation?.CENTER_ALIGN || TEXT_DICTIONARY?.CENTER_ALIGN,
        },
        {
            element: <StyledImage src={IconAlignRight} />,
            selected: textAlign === 'right',
            onClick: () => {
                if (textAlign !== 'right') {
                    onChangeTextProperty('textAlign', 'right');
                }
            },
            tooltip: translation?.RIGHT_ALIGN || TEXT_DICTIONARY?.RIGHT_ALIGN,
        },
    ];

    return (
        <RowContainer>
            <DropDown
                gap={40}
                left={<Label fontFamily={fontFamily}>{fontFamily}</Label>}
                fontPicker={true}
                list={fontFamilies}
                onSelect={e => {
                    onChangeTextProperty('fontFamily', e);
                }}
                tooltip={translation?.FONT_FAMILY || TEXT_DICTIONARY?.FONT_FAMILY}
                tooltipPosition={'bottom'}
            />
            <OpacityPicker
                gap={11}
                value={fontSize}
                varient={'size'}
                fontFamily={theme.fonts.primary}
                min={5}
                max={100}
                step={1}
                onChangeOpacity={e => onChangeTextProperty('fontSize', e)}
                showLeftChild={false}
                rightChild={<StyledImage src={IconDropDown} marginLeft={10} />}
                tooltip={translation?.TEXT_SIZE || TEXT_DICTIONARY?.TEXT_SIZE}
                tooltipPosition={'bottom'}
            />
            <ToolBarButtonWrapper
                gap={12}
                tooltip={translation?.TEXT_COLOR || TEXT_DICTIONARY?.TEXT_COLOR}
                tooltipPosition={'bottom'}
            >
                <StyledImage src={IconTextSmall} />
                <ColorBox
                    backgroundColor={color}
                    onChange={e => onChangeTextProperty('color', e)}
                />
            </ToolBarButtonWrapper>
            <ToolsTabBar
                tabsData={TextTabsData}
                marginRight={12}
                height={40}
                tabPadding={topTabBarpadding}
                tooltipPosition={'bottom'}
            />
            <ToolsTabBar
                tabsData={AlignmentTabsData}
                marginRight={20}
                height={40}
                tabPadding={topTabBarpadding}
                tooltipPosition={'bottom'}
            />

            <OpacityPicker
                value={textOpacity}
                onChangeOpacity={e => onChangeTextProperty('opacity', e)}
                tooltip={translation?.TEXT_OPACITY || TEXT_DICTIONARY?.TEXT_OPACITY}
                tooltipPosition={'bottom'}
            />
        </RowContainer>
    );
};

TextToolBar.propTypes = propTypes;
