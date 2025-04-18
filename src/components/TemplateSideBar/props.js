import PropTypes from 'prop-types';

export const propTypes = {
    oncreateNewTemplate: PropTypes.func.isRequired,
    translation: PropTypes.object,
    defaultTemplatesList: PropTypes.array.isRequired,
    customTemplatesList: PropTypes.array.isRequired,
};
