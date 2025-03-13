import styled from 'styled-components';
import theme from '../../theme';

const Button = styled.button`
    background: ${({ color }) => color || theme.color.primary};
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[800]};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background: ${theme.color.gray_788899};
    }
`;

export default Button;
