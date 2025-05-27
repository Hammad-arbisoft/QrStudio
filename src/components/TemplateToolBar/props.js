import PropTypes from 'prop-types';

export const propTypes = {
    onSetBackgroundColor: PropTypes.func,
    canvasBackgroundColor: PropTypes.string,
    onSetBackgroundImage: PropTypes.func,
    backgroundImageOpacity: PropTypes.number,
    onChangeBackgroundImageOpacity: PropTypes.func,
    onSetPageSize: PropTypes.func,
    selectedPageSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    languageLocale: PropTypes.string,
    uploadImageCallBack: PropTypes.func,
    setLoadingUploadImage: PropTypes.func,
    cuttingGuideStroke: PropTypes.number,
    cuttingGuideStrokeColor: PropTypes.string,
    onChangeCuttingGuideProp: PropTypes.func,
};
