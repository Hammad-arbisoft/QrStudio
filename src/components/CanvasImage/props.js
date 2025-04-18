import PropTypes from 'prop-types';

export const propTypes = {
    id: PropTypes.string.isRequired,
    element: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    onDragEnd: PropTypes.func,
    onTransformEnd: PropTypes.func,
    onDragMove: PropTypes.func,
};
