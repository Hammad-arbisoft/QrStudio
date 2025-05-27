import PropTypes from 'prop-types';

export const propTypes = {
    id: PropTypes.string,
    element: PropTypes.object,
    onClick: PropTypes.func,
    onDragEnd: PropTypes.func,
    onTransformEnd: PropTypes.func,
    onDragMove: PropTypes.func,
};
