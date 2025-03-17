import styled from 'styled-components';

export const BottomToolbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({ selectedTab }) => (selectedTab ? 'space-between' : 'flex-end')};
    padding-right: 3%;
    padding-left: 5%;
    padding-bottom: ${({ selectedTab }) => (selectedTab ? '6' : '14')}px;
`;
