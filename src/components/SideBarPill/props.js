import PropTypes from 'prop-types';

export const propTypes = {
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string,
};