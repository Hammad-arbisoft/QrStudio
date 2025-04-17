import React, { useEffect, useRef, useState } from 'react';
import { propTypes } from './props';
import { ToolBarButtonWrapper } from '../ToolBarButtonWrapper';
import { IconDropDown } from '@/assets';
import { DropDownItem, DropDownList, DropDownOption, IconWrapper } from './styled';
import theme from '@/theme';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const DropDown = ({
    left,
    right,
    center,
    gap,
    paddingLeft,
    paddingRight,
    list,
    onSelect,
    fontPicker,
    tooltip = TEXT_DICTIONARY?.DROPDOWN,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = item => {
        onSelect(item);
        setIsOpen(false);
    };

    return (
        <div
            ref={dropdownRef}
            style={{
                position: 'relative',
            }}
            onClick={() => {
                setIsOpen(true);
            }}
        >
            <ToolBarButtonWrapper
                justifyContent={center ? 'space-between' : 'center'}
                gap={gap}
                paddingLeft={paddingLeft}
                paddingRight={paddingRight}
                tooltip={tooltip}
                tooltipPosition={'bottom'}
            >
                <DropDownItem>{left}</DropDownItem>
                <DropDownItem>{center}</DropDownItem>
                <DropDownItem>{right ? right : <IconWrapper src={IconDropDown} />}</DropDownItem>
            </ToolBarButtonWrapper>
            {isOpen && (
                <DropDownList>
                    {list?.map((item, index) => (
                        <DropDownOption
                            key={index}
                            onClick={e => {
                                handleSelect(item);
                                e?.stopPropagation();
                            }}
                            style={{
                                padding: '8px 16px',
                                cursor: 'pointer',
                                borderBottom: index !== list.length - 1 ? '1px solid #eee' : 'none',
                                fontFamily: fontPicker ? item : theme.fonts.primary,
                            }}
                        >
                            {item}
                        </DropDownOption>
                    ))}
                </DropDownList>
            )}
        </div>
    );
};

DropDown.propTypes = propTypes;
