import PropTypes from 'prop-types';

export const propTypes = {
    height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
    paddingTop: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    paddingBottom: PropTypes.oneOfType([
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
    children: PropTypes.node,
    marginLeft: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    marginRight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    justifyContent: PropTypes.string,
    gap: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
};
