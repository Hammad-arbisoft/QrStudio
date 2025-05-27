import PropTypes from 'prop-types';

export const propTypes = {
    title: PropTypes.string,
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    hideIcon: PropTypes.bool,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    content: PropTypes.node,
};
