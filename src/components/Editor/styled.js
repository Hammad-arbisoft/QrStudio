import styled from 'styled-components';
import theme from '@/theme';
import EditorBg from '@/assets/images/small-dots.png';

export const Container = styled.div`
    flex: 1;
    display: flex;
    background-color: ${theme.color.white_F7F7F7};
    background-image: ${({ selectedTab }) => (selectedTab ? 'none' : `url(${EditorBg})`)};
    position: relative;
    flex-direction: column;
    overflow: hidden;
`;

export const InnerContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // overflow: auto;
    // flex: 1;
    // align-items: center;
    // justify-content: center;
    // flex-grow: 1;
    // background: green;
    // // min-height: 100px;

    display: grid;
    place-items: center;
    overflow: auto;
    flex: 1;
`;

export const InnerContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    justify-content: center;
    min-height: ${({ editorHeight }) => editorHeight || 500}px;
    height: ${({ editorHeight }) => editorHeight || 500}px;
    min-width: ${({ editorWidth }) => editorWidth || 400}px;
    width: ${({ editorWidth }) => editorWidth || 400}px;
`;

export const Title = styled.p`
    border: 1px solid ${theme.color.gray_E8E8E8};
    align-self: flex-start;
    font-size: 14px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[300]};
    color: ${theme.color.gray_7A7979};
    padding: 0 6px;
    border-bottom-width: 0;
`;

export const EditorBox = styled.div`
    height: ${({ editorHeight }) => editorHeight || 470}px;
    width: ${({ editorWidth }) => editorWidth || 350}px;
    min-height: ${({ editorHeight }) => editorHeight || 470}px;
    min-width: ${({ editorWidth }) => editorWidth || 350}px;
    background: ${theme.color.gray_25};
    box-shadow: 1.317px 1.317px 1.317px 0px rgba(0, 0, 0, 0.08);
    // transition: all 0.1s ease-in-out;
    overflow: hidden;
`;
