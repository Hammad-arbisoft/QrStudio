import PropTypes from 'prop-types';

export const propTypes = {
    selectedSideBarItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClickPill: PropTypes.func, 
};
