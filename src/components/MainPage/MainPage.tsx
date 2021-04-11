import React from 'react'
import styled from 'styled-components';

import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import MainContent from '../MainContent/MainContent';
const Wrapper = styled.section`
`;

const Content = styled.div`
    display:flex;
    margin-top:20px;
`;



function MainPage() {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <MainContent/>
            </Content>
        </Wrapper>
    )
}

export default MainPage
