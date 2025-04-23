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
    uploadImageCallBack,
    setLoadingUploadImage,
    defaultTemplatesList,
    customTemplatesList,
    styleProps,
    defaultText,
    languageLocale,
}) => (
    <SideBarWrapper visible={selectedSideBarItem && helperSideBarVisible}>
        <SideBarHeader
            onCollapse={onCollapse}
            selectedSideBarItem={selectedSideBarItem}
            languageLocale={languageLocale}
        />
        <SideBarContainer visible={selectedSideBarItem && helperSideBarVisible}>
            {selectedSideBarItem === sideBarpillsList?.template ? (
                <TemplateSideBar
                    oncreateNewTemplate={oncreateNewTemplate}
                    languageLocale={languageLocale}
                    defaultTemplatesList={defaultTemplatesList}
                    customTemplatesList={customTemplatesList}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.text ? (
                <TextSideBar
                    onAddTextToCanvas={onAddTextToCanvas}
                    languageLocale={languageLocale}
                    styleProps={styleProps}
                    defaultText={defaultText}
                />
            ) : selectedSideBarItem === sideBarpillsList?.image ? (
                <ImageSideBar
                    defaultImagesList={defaultImagesList}
                    customImagesList={customImagesList}
                    onAddCustomImageToList={onAddCustomImageToList}
                    onAddImageToCanvas={onAddImageToCanvas}
                    languageLocale={languageLocale}
                    uploadImageCallBack={uploadImageCallBack}
                    setLoadingUploadImage={setLoadingUploadImage}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.shape ? (
                <ShapeSideBar onAddShape={onAddShape} languageLocale={languageLocale} />
            ) : selectedSideBarItem === sideBarpillsList?.qr ? (
                <QrSideBar
                    toggleQr={toggleQr}
                    qrPresent={qrPresent}
                    toggleQrLogo={toggleQrLogo}
                    addQrLogo={addQrLogo}
                    elements={elements}
                    qrLogo={qrLogo}
                    languageLocale={languageLocale}
                    styleProps={styleProps}
                />
            ) : selectedSideBarItem === sideBarpillsList?.whiteLabel ? (
                <WhiteLabelSideBar languageLocale={languageLocale} styleProps={styleProps} />
            ) : null}
        </SideBarContainer>
    </SideBarWrapper>
);

HelperSideBar.propTypes = propTypes;
