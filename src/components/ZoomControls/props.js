import PropTypes from 'prop-types';

export const propTypes = {
    zoomLevel: PropTypes.number,
    onZoomIn: PropTypes.func,
    onZoomOut: PropTypes.func,
    translation: PropTypes.object.isRequired,
};
