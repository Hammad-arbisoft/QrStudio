import PropTypes from 'prop-types';

export const propTypes = {
    value: PropTypes.number,
    strokeColor: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChangeStrokeWidth: PropTypes.func,
    onChangeShapeStrokeColor: PropTypes.func,
    pickerWidth: PropTypes.number,
    languageLocale: PropTypes.string,
    tooltip: PropTypes.string,
    leftIcon: PropTypes.elementType,
};
