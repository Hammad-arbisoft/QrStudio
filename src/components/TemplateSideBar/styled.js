import styled from 'styled-components';

export const TemplatesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    align-items: flex-start;
`;

export const TemplateItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1;
    }

    &:hover::before {
        opacity: 1;
    }
    &:hover > button {
        display: flex;
        z-index: 2;
    }
`;

export const StyledDeleteButton = styled.button`
    display: none;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    padding: 8px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        border-color: #d91919;
    }
    &:focus {
        outline: none;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 18px;
    overflow: auto;
`;
