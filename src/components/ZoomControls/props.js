import PropTypes from 'prop-types';

export const propTypes = {
    zoomLevel: PropTypes.number.isRequired,
    onZoomIn: PropTypes.func.isRequired,
    onZoomOut: PropTypes.func.isRequired,
};
