import PropTypes from 'prop-types';

export const propTypes = {
    selectedSideBarItem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    helperSideBarVisible: PropTypes.bool,
    onCollapse: PropTypes.func,
    onAddShape: PropTypes.func,
    defaultImagesList: PropTypes.array,
    customImagesList: PropTypes.array,
    onAddCustomImageToList: PropTypes.func,
    onAddImageToCanvas: PropTypes.func,
    toggleQr: PropTypes.func,
    qrPresent: PropTypes.bool,
    toggleQrLogo: PropTypes.func,
    addQrLogo: PropTypes.func,
    elements: PropTypes.array,
    qrLogo: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.object,
              ]),
    onAddTextToCanvas: PropTypes.func,
    oncreateNewTemplate: PropTypes.func,
    languageLocale: PropTypes.string,
    uploadImageCallBack: PropTypes.func,
    setLoadingUploadImage: PropTypes.func,
    defaultTemplatesList: PropTypes.array,
    customTemplatesList: PropTypes.array,
    styleProps: PropTypes.object,
};
