import PropTypes from 'prop-types';

export const propTypes = {
    element: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onDragEnd: PropTypes.func,
    onTransformEnd: PropTypes.func,
    onTransform: PropTypes.func,
    onChangeTextContent: PropTypes.func,
    onChangeTextProperty: PropTypes.func,
    onDragMove: PropTypes.func,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
