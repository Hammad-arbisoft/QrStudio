import styled from 'styled-components';

export const CollapsableContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${({ marginTop }) => marginTop}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const CollapsableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    justify-content: flex-start;
    align-self: flex-start;
    margin-bottom: 14px;
`;

export const LeftIconWrapper = styled.div`
    margin-right: 6px;
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3px;
`;

export const CollapsableContent = styled.div`
    display: ${({ visible }) => (visible ? 'flex' : 'none')};
`;
