import React, { useCallback, useMemo } from 'react';
import { propTypes } from './props';
import { SideBarWrapper } from './styled';
import { SideBarPill } from '../SideBarPill';
import { IconImage, IconQrCode, IconShape, IconTemplate, IconText, IconWhiteLabel } from '@/assets';
import { sideBarpillsList } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';
export const SideBar = ({
    selectedSideBarItem,
    onClickPill = () => {},
    disableWhiteLabel,
    styleProps,
    languageLocale,
}) => {
    const sideBarItems = [
        {
            id: sideBarpillsList.template,
            text: TEXT_DICTIONARY?.[languageLocale]?.TEMPLATE,
            icon: IconTemplate,
        },
        {
            id: sideBarpillsList.text,
            text: TEXT_DICTIONARY?.[languageLocale]?.TEXT,
            icon: IconText,
        },
        {
            id: sideBarpillsList.image,
            text: TEXT_DICTIONARY?.[languageLocale]?.IMAGE,
            icon: IconImage,
        },
        {
            id: sideBarpillsList.shape,
            text: TEXT_DICTIONARY?.[languageLocale]?.SHAPE,
            icon: IconShape,
        },
        {
            id: sideBarpillsList.qr,
            text: TEXT_DICTIONARY?.[languageLocale]?.QR,
            icon: IconQrCode,
        },
        {
            id: sideBarpillsList.whiteLabel,
            text: TEXT_DICTIONARY?.[languageLocale]?.WHITE_LABEL,
            icon: IconWhiteLabel,
        },
    ];
    const onClickSinglePill = useCallback(
        e => {
            onClickPill(e);
        },
        [onClickPill],
    );

    const renderPills = useMemo(
        () =>
            sideBarItems?.map(item => {
                if (item?.id === sideBarpillsList?.whiteLabel && disableWhiteLabel) {
                    return null;
                }
                return (
                    <SideBarPill
                        key={item?.id}
                        isSelected={selectedSideBarItem === item?.id}
                        onClick={() => onClickSinglePill(item?.id)}
                        icon={item?.icon}
                        text={item?.text}
                        languageLocale={languageLocale}
                        pillActiveColor={styleProps?.primaryColor}
                    />
                );
            }),
        [selectedSideBarItem, onClickSinglePill, languageLocale],
    );

    return <SideBarWrapper>{renderPills}</SideBarWrapper>;
};

SideBar.propTypes = propTypes;
