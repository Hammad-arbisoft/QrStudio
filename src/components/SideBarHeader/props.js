import PropTypes from 'prop-types';

export const propTypes = {
    onCollapse: PropTypes.func,
    selectedSideBarItem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    languageLocale: PropTypes.string,
};
