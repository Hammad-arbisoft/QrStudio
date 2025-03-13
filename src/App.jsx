import React from 'react';
import './App.css';
import { Studio } from './features';
import { InnerWrapper, Wrapper } from './styled';

const App = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <Studio />
            </InnerWrapper>
        </Wrapper>
    );
};

export default App;
