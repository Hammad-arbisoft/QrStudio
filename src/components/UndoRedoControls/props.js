import PropTypes from 'prop-types';

export const propTypes = {
    onUndo: PropTypes.func,
    onRedo: PropTypes.func,
    disableUndo: PropTypes.bool,
    disableRedo: PropTypes.bool,
    translation: PropTypes.object,
};
