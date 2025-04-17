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
    toggleQr,
    qrPresent,
    toggleQrLogo,
    addQrLogo,
    elements,
    qrLogo,
    onAddTextToCanvas,
    oncreateNewTemplate,
    translation,
    uploadImageCallBack,
    setLoadingUploadImage,
    defaultTemplatesList,
    customTemplatesList,
    styleProps,
}) => (
    <SideBarWrapper visible={selectedSideBarItem && helperSideBarVisible}>
        <SideBarHeader
            onCollapse={onCollapse}
            selectedSideBarItem={selectedSideBarItem}
            translation={translation}
        />
        <SideBarContainer visible={selectedSideBarItem && helperSideBarVisible}>
            {selectedSideBarItem === sideBarpillsList?.template ? (
                <TemplateSideBar
                    oncreateNewTemplate={oncreateNewTemplate}
                    translation={translation}
                    defaultTemplatesList={defaultTemplatesList}
                    customTemplatesList={customTemplatesList}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.text ? (
                <TextSideBar
                    onAddTextToCanvas={onAddTextToCanvas}
                    translation={translation}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.image ? (
                <ImageSideBar
                    defaultImagesList={defaultImagesList}
                    customImagesList={customImagesList}
                    onAddCustomImageToList={onAddCustomImageToList}
                    onAddImageToCanvas={onAddImageToCanvas}
                    translation={translation}
                    uploadImageCallBack={uploadImageCallBack}
                    setLoadingUploadImage={setLoadingUploadImage}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.shape ? (
                <ShapeSideBar onAddShape={onAddShape} translation={translation} />
            ) : selectedSideBarItem === sideBarpillsList?.qr ? (
                <QrSideBar
                    toggleQr={toggleQr}
                    qrPresent={qrPresent}
                    toggleQrLogo={toggleQrLogo}
                    addQrLogo={addQrLogo}
                    elements={elements}
                    qrLogo={qrLogo}
                    translation={translation}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.whiteLabel ? (
                <WhiteLabelSideBar translation={translation} styleProps={styleProps} />
            ) : null}
        </SideBarContainer>
    </SideBarWrapper>
);

HelperSideBar.propTypes = propTypes;
