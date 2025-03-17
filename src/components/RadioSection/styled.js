import theme from '@/theme';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
    width: 44px;
    height: 24px;
    background-color: ${({ isActive }) =>
        isActive ? theme.color.green_80D965 : theme.color.gray_E8E8E8};
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 2px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
`;

export const ToggleCircle = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: ${({ isActive }) => (isActive ? 'calc(100% - 24px)' : '4px')};
    transition:
        left 0.3s ease,
        box-shadow 0.3s ease;
    box-shadow: ${({ isActive }) =>
        isActive ? '2px 2px 5px rgba(0, 0, 0, 0.2)' : '-2px 2px 5px rgba(0, 0, 0, 0.2)'};
`;

export const Container = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;
