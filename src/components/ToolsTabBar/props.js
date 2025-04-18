import PropTypes from 'prop-types';

export const propTypes = {
    tabsData: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    tabPadding: PropTypes.string,
    marginRight: PropTypes.number,
    disabled: PropTypes.bool,
    tooltipPosition: PropTypes.string,
};
