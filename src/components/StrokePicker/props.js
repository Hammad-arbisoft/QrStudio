import PropTypes from 'prop-types';

export const propTypes = {
    value: PropTypes.number.isRequired,
    strokeColor: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChangeStrokeWidth: PropTypes.func.isRequired,
    onChangeShapeStrokeColor: PropTypes.func.isRequired,
    pickerWidth: PropTypes.number,
    translation: PropTypes.object,
    tooltip: PropTypes.string,
    leftIcon: PropTypes.elementType,
};
