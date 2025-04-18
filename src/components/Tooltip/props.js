import PropTypes from 'prop-types';

export const propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    disabled: PropTypes.bool,
};
