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
`;

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 18px;
    overflow: auto;
`;
