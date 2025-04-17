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
    translation,
    disableWhiteLabel,
    styleProps,
}) => {
    const sideBarItems = useMemo(() => {
        let List = [
            {
                id: sideBarpillsList.template,
                text: translation?.TEMPLATE || TEXT_DICTIONARY?.TEMPLATE,
                icon: IconTemplate,
            },
            {
                id: sideBarpillsList.text,
                text: translation?.TEXT || TEXT_DICTIONARY?.TEXT,
                icon: IconText,
            },
            {
                id: sideBarpillsList.image,
                text: translation?.IMAGE || TEXT_DICTIONARY?.IMAGE,
                icon: IconImage,
            },
            {
                id: sideBarpillsList.shape,
                text: translation?.SHAPE || TEXT_DICTIONARY?.SHAPE,
                icon: IconShape,
            },
            {
                id: sideBarpillsList.qr,
                text: translation?.QR || TEXT_DICTIONARY?.QR,
                icon: IconQrCode,
            },
        ];
        if (!disableWhiteLabel) {
            List.push({
                id: sideBarpillsList.whiteLabel,
                text: translation?.WHITE_LABEL || TEXT_DICTIONARY?.WHITE_LABEL,
                icon: IconWhiteLabel,
            });
        }

        return List;
    }, [translation, disableWhiteLabel]);
    const onClickSinglePill = useCallback(
        e => {
            onClickPill(e);
        },
        [onClickPill],
    );

    const renderPills = useMemo(
        () =>
            sideBarItems?.map(item => (
                <SideBarPill
                    key={item?.id}
                    isSelected={selectedSideBarItem === item?.id}
                    onClick={() => onClickSinglePill(item?.id)}
                    icon={item?.icon}
                    text={item?.text}
                    translation={translation}
                    pillActiveColor={styleProps?.primaryColor}
                />
            )),
        [selectedSideBarItem, onClickSinglePill],
    );

    return <SideBarWrapper>{renderPills}</SideBarWrapper>;
};

SideBar.propTypes = propTypes;
