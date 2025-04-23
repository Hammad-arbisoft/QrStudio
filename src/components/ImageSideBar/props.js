import PropTypes from 'prop-types';

export const propTypes = {
    defaultImagesList: PropTypes.array,
    customImagesList: PropTypes.array,
    onAddCustomImageToList: PropTypes.func,
    onAddImageToCanvas: PropTypes.func,
    languageLocale: PropTypes.string,
    uploadImageCallBack: PropTypes.func,
    setLoadingUploadImage: PropTypes.func,
};
