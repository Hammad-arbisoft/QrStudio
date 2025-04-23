import PropTypes from 'prop-types';

export const propTypes = {
    oncreateNewTemplate: PropTypes.func.isRequired,
    languageLocale: PropTypes.string,
    defaultTemplatesList: PropTypes.array.isRequired,
    customTemplatesList: PropTypes.array.isRequired,
};
