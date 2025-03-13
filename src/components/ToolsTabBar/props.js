import PropTypes from 'prop-types';

export const propTypes = {
    tabsData: PropTypes.arrayOf(
        PropTypes.shape({
            element: PropTypes.node,
            onClick: PropTypes.func,
        }),
    ),
    height: PropTypes.number,
    tabPadding: PropTypes.string,
};
