import PropTypes from 'prop-types';

export const propTypes = {
    qrStrokeWidth: PropTypes.number,
    qrStrokeColor: PropTypes.string,
    qrOpacity: PropTypes.number,
    onChangeQrStrokeWidth: PropTypes.func,
    onChangeQrStrokeColor: PropTypes.func,
    onChangeQrOpacity: PropTypes.func,
    selectedElement: PropTypes.object,
    translation: PropTypes.object,
};
