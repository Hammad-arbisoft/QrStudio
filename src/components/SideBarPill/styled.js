import styled from 'styled-components';
import theme from '@/theme';

export const SideBarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    min-height: 100px;
    background-color: ${({ isSelected, pillActiveColor }) =>
        isSelected ? pillActiveColor : theme.color.secondary};
    margin-bottom: 2px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ pillActiveColor }) => pillActiveColor};
    }
`;

export const SideBarIcon = styled.img`
    height: 28px;
    width: 28px;
    object-fit: contain;
    margin-bottom: 8px;
    filter: ${({ isSelected = false }) => (isSelected ? 'brightness(0) invert(1)' : 'none')};

    ${SideBarItem}:hover & {
        filter: brightness(0) invert(1);
    }
`;

export const SideBarText = styled.p`
    color: ${({ isSelected = false }) =>
        isSelected ? theme.color.white : theme.color.gray_535354};
    font-size: 12px;
    font-family: ${theme.fonts.primary};
    font-weight: ${theme.fontWeights[400]};
    line-height: 109.023%;

    ${SideBarItem}:hover & {
        color: ${theme.color.white};
    }
`;
