import PropTypes from 'prop-types';

export const propTypes = {
    tabsData: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
    tabPadding: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]),
    marginRight: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]),
    disabled: PropTypes.bool,
    tooltipPosition: PropTypes.string,
};
