import { helperSideBarWidth } from '@/constants/layoutConstants';
import theme from '@/theme';
import styled from 'styled-components';

export const SideBarWrapper = styled.div`
    width: ${({ visible = true }) => (visible ? helperSideBarWidth : 0)}px;
    display: flex;
    flex-direction: column;
    background: ${theme.color.gray_FBFBFB};
    border-left: 1px solid ${theme.color.gray_F5F6F6};
    transition: width 0.3s ease-in-out;
    overflow: hidden;
`;

export const SideBarContainer = styled.div`
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: ${helperSideBarWidth}px;
`;
