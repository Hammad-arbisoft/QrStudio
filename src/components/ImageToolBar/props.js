import PropTypes from 'prop-types';

export const propTypes = {
    imageStrokeWidth: PropTypes.number,
    imageStrokeColor: PropTypes.string,
    imageOpacity: PropTypes.number,
    onChangeImageStrokeWidth: PropTypes.func,
    onChangeImageStrokeColor: PropTypes.func,
    onChangeImageOpacity: PropTypes.func,
    selectedElement: PropTypes.object,
    languageLocale: PropTypes.string,
};
