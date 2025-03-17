import React from 'react';
import { propTypes } from './props';
import { Container, EditorBox, InnerContainer, InnerContainerWrapper, Title } from './styled';
import { TopToolBar } from '../TopToolBar';
import { BottomToolBar } from '../BottomToolBar';
import { sideBarpillsList } from '@/constants';

export const Editor = ({ selectedTab, title = 'title' }) => {
    return (
        <Container selectedTab={selectedTab}>
            {selectedTab && selectedTab !== sideBarpillsList?.whiteLabel && (
                <TopToolBar selectedTab={selectedTab} />
            )}
            <InnerContainer>
                <InnerContainerWrapper>
                    <Title>{title}</Title>
                    <EditorBox />
                </InnerContainerWrapper>
            </InnerContainer>
            <BottomToolBar selectedTab={selectedTab} />
        </Container>
    );
};

Editor.propTypes = propTypes;
