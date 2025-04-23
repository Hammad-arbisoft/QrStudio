import PropTypes from 'prop-types';

export const propTypes = {
    onSetBackgroundColor: PropTypes.func.isRequired,
    canvasBackgroundColor: PropTypes.string.isRequired,
    onSetBackgroundImage: PropTypes.func.isRequired,
    backgroundImageOpacity: PropTypes.number.isRequired,
    onChangeBackgroundImageOpacity: PropTypes.func.isRequired,
    onSetPageSize: PropTypes.func.isRequired,
    selectedPageSize: PropTypes.object.isRequired,
    languageLocale: PropTypes.string,
    uploadImageCallBack: PropTypes.func.isRequired,
    setLoadingUploadImage: PropTypes.func.isRequired,
    cuttingGuideStroke: PropTypes.number.isRequired,
    cuttingGuideStrokeColor: PropTypes.string.isRequired,
    onChangeCuttingGuideProp: PropTypes.func.isRequired,
};
