import PropTypes from 'prop-types';

export const propTypes = {
    fontFamily: PropTypes.string,
    fontSize: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
    color: PropTypes.string,
    textDecoration: PropTypes.string,
    fontStyle: PropTypes.string,
    fontWeight: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
          ]),
    textAlign: PropTypes.string,
    textOpacity: PropTypes.number,
    onChangeTextProperty: PropTypes.func,
    languageLocale: PropTypes.string,
};
