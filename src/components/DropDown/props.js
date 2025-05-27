import PropTypes from 'prop-types';

export const propTypes = {
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    right: PropTypes.bool,
    center: PropTypes.bool,
    gap: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    paddingLeft: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    paddingRight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    list: PropTypes.array,
    onSelect: PropTypes.func,
    fontPicker: PropTypes.any,
    tooltip: PropTypes.string,
};
