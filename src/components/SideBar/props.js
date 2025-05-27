import PropTypes from 'prop-types';

export const propTypes = {
    selectedSideBarItem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    onClickPill: PropTypes.func,
    languageLocale: PropTypes.string,
    disableWhiteLabel: PropTypes.bool,
    styleProps: PropTypes.object,
};
