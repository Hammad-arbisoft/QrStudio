import React from 'react';
import { propTypes } from './props';
import { Container, EditorBox, InnerContainer, InnerContainerWrapper, Title } from './styled';
import { TopToolBar } from '../TopToolBar';
import { BottomToolBar } from '../BottomToolBar';

export const Editor = ({ selectedTab = false, title = 'title' }) => {
    return (
        <Container selectedTab={selectedTab}>
            <TopToolBar />
            <InnerContainer>
                <InnerContainerWrapper>
                    <Title>{title}</Title>
                    <EditorBox />
                </InnerContainerWrapper>
            </InnerContainer>
            <BottomToolBar />
        </Container>
    );
};

Editor.propTypes = propTypes;
