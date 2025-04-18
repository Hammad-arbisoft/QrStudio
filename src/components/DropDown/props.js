import PropTypes from 'prop-types';

export const propTypes = {
    left: PropTypes.bool,
    right: PropTypes.bool,
    center: PropTypes.bool,
    gap: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    list: PropTypes.array,
    onSelect: PropTypes.func,
    fontPicker: PropTypes.object,
    tooltip: PropTypes.string,
};
