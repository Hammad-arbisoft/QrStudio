import PropTypes from 'prop-types';

export const propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    disabled: PropTypes.bool,
};
