import PropTypes from 'prop-types';

export const propTypes = {
    onDeleteSelectedElement: PropTypes.func,
    onCopySelectedElement: PropTypes.func,
    onToggleLockElement: PropTypes.func,
    selectedElement: PropTypes.object,
    bringSelectedElementToFront: PropTypes.func,
    sendSelectedElementToBack: PropTypes.func,
    translation: PropTypes.object,
};
