import PropTypes from 'prop-types';

export const propTypes = {
    shapeStrokeColor: PropTypes.string,
    shapeStrokeWidth: PropTypes.number,
    shapeFillColor: PropTypes.string,
    shapeOpacity: PropTypes.number,
    onChangeShapeStrokeColor: PropTypes.func,
    onChangeShapeStrokeWidth: PropTypes.func,
    onChangeShapeFill: PropTypes.func,
    onChangeShapeOpacity: PropTypes.func,
    selectedElement: PropTypes.object,
    languageLocale: PropTypes.string,
};
