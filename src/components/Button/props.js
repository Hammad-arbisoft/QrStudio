import { ButtonVarients } from '@/constants';
import PropTypes from 'prop-types';

export const propTypes = {
    varient: PropTypes.oneOf(Object.values(ButtonVarients)),
    left: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    text: PropTypes.string,
    marginBottom: PropTypes.number,
    marginTop: PropTypes.number,
    onClick: PropTypes.func,
};
