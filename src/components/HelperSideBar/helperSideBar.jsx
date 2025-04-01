import React from 'react';
import { propTypes } from './props';
import { SideBarHeader } from '../SideBarHeader';
import { SideBarContainer, SideBarWrapper } from './styled';
import { TemplateSideBar } from '../TemplateSideBar';
import { TextSideBar } from '../TextSideBar';
import { ImageSideBar } from '../ImageSideBar';
import { ShapeSideBar } from '../ShapeSideBar';
import { QrSideBar } from '../QrSideBar';
import { WhiteLabelSideBar } from '../WhiteLabelSideBar';
import { sideBarpillsList } from '@/constants';
export const HelperSideBar = ({
    selectedSideBarItem,
    helperSideBarVisible,
    onCollapse = () => {},
    onAddShape,
    defaultImagesList,
    customImagesList,
    onAddCustomImageToList,
    onAddImageToCanvas,
}) => (
    <SideBarWrapper visible={selectedSideBarItem && helperSideBarVisible}>
        <SideBarHeader onCollapse={onCollapse} selectedSideBarItem={selectedSideBarItem} />
        <SideBarContainer visible={selectedSideBarItem && helperSideBarVisible}>
            {selectedSideBarItem === sideBarpillsList?.template ? (
                <TemplateSideBar />
            ) : selectedSideBarItem === sideBarpillsList?.text ? (
                <TextSideBar />
            ) : selectedSideBarItem === sideBarpillsList?.image ? (
                <ImageSideBar
                    defaultImagesList={defaultImagesList}
                    customImagesList={customImagesList}
                    onAddCustomImageToList={onAddCustomImageToList}
                    onAddImageToCanvas={onAddImageToCanvas}
                />
            ) : selectedSideBarItem === sideBarpillsList?.shape ? (
                <ShapeSideBar onAddShape={onAddShape} />
            ) : selectedSideBarItem === sideBarpillsList?.qr ? (
                <QrSideBar />
            ) : selectedSideBarItem === sideBarpillsList?.whiteLabel ? (
                <WhiteLabelSideBar />
            ) : null}
        </SideBarContainer>
    </SideBarWrapper>
);

HelperSideBar.propTypes = propTypes;
