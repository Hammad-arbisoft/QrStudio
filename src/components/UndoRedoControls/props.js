import PropTypes from 'prop-types';

export const propTypes = {
    onUndo: PropTypes.func.isRequired,
    onRedo: PropTypes.func.isRequired,
    disableUndo: PropTypes.bool,
    disableRedo: PropTypes.bool,
    translation: PropTypes.object.isRequired,
};
