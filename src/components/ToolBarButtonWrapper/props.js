import PropTypes from 'prop-types';

export const propTypes = {
    height: PropTypes.string.isRequired,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingRight: PropTypes.string,
    children: PropTypes.node.isRequired,
    marginLeft: PropTypes.string,
    marginRight: PropTypes.string,
    justifyContent: PropTypes.string,
    gap: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
};
