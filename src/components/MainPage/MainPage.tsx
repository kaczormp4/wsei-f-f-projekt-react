import React from 'react'
import styled from 'styled-components';
import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
const Wrapper = styled.section`
`;

const Content = styled.div`
    display:flex;
`;



function MainPage() {
    return (
        <Wrapper>
            <TopBar/>
            <Content>
                <LeftMenu/>
                <>content</>
            </Content>
        </Wrapper>
    )
}

export default MainPage
