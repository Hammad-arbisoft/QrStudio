import PropTypes from 'prop-types';

export const propTypes = {
    fontFamily: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textDecoration: PropTypes.string,
    fontStyle: PropTypes.string,
    fontWeight: PropTypes.string,
    textAlign: PropTypes.string,
    textOpacity: PropTypes.number,
    onChangeTextProperty: PropTypes.func.isRequired,
    languageLocale: PropTypes.string,
};
