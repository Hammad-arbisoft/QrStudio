import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 18px;
    overflow: auto;
`;

export const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
`;

export const SingleItem = styled.div`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    width: ${(width = 'calc(50% - 20px)') => width};
`;
