import PropTypes from 'prop-types';

export const propTypes = {
    value: PropTypes.number,
    onChangeOpacity: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    pickerWidth: PropTypes.number,
    leftChild: PropTypes.node,
    rightChild: PropTypes.node,
    gap: PropTypes.number,
    showLeftChild: PropTypes.bool,
    varient: PropTypes.string,
    fontFamily: PropTypes.string,
    tooltip: PropTypes.string,
    tooltipPosition: PropTypes.string,
};
