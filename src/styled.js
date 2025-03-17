import styled from 'styled-components';
import theme from './theme';

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${theme.color.gray_B8B8B8};
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const InnerWrapper = styled.div`
    height: 80%;
    width: 80%;
    background-color: ${theme.color.gray_535354};
    display: flex;
`;

export { InnerWrapper, Wrapper };
