import PropTypes from 'prop-types';

export const propTypes = {
    toggleQr: PropTypes.func,
    qrPresent: PropTypes.bool,
    toggleQrLogo: PropTypes.func,
    addQrLogo: PropTypes.func,
    elements: PropTypes.array,
    qrLogo: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.object,
                  ]),
    languageLocale: PropTypes.string,
};
