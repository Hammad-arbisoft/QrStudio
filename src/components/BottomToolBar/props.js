import PropTypes from 'prop-types';

export const propTypes = {
    selectedTab: PropTypes.string,
    zoomPercentage: PropTypes.number,
    onChangeZoomPercentage: PropTypes.func,
    onUndo: PropTypes.func,
    onRedo: PropTypes.func,
    disableUndo: PropTypes.bool,
    disableRedo: PropTypes.bool,
    selectedElement: PropTypes.object,
    onDeleteSelectedElement: PropTypes.func,
    onCopySelectedElement: PropTypes.func,
    onToggleLockElement: PropTypes.func,
    bringSelectedElementToFront: PropTypes.func,
    sendSelectedElementToBack: PropTypes.func,
    translation: PropTypes.object,
};
