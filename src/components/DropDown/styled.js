import styled from 'styled-components';

export const DropDownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconWrapper = styled.img`
    object-fit: contain;
`;

export const DropDownList = styled.div`
    position: absolute;
    left: 0;
    top: 50;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 5px;
    z-index: 10;
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    z-index: 9999;
`;

// Individual option in the dropdown
export const DropDownOption = styled.div`
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    &:hover {
        background-color: #f0f0f0;
    }
    &:active {
        background-color: #e0e0e0;
    }
`;
