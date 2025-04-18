import PropTypes from 'prop-types';

export const propTypes = {
    key: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
    pillActiveColor: PropTypes.string,
};
