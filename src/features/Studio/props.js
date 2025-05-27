import PropTypes from 'prop-types';

export const propTypes = {
    title: PropTypes.string,
    languageLocale: PropTypes.string,
    elementsList: PropTypes.array,
    customImages: PropTypes.array,
    defaultImages: PropTypes.array,
    disableWhiteLabel: PropTypes.bool,
    defaultTemplatesList: PropTypes.array,
    customTemplatesList: PropTypes.array,
    qrLink: PropTypes.string,
    styleProps: PropTypes.object,
    defaultText: PropTypes.string,
    onSave: PropTypes.func,
    saveButtonText: PropTypes.string,
    locale: PropTypes.oneOf(['en', 'ru', 'pl', 'de', 'es', 'fr', 'it']),
};
