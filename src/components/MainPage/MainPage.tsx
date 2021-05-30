import React from 'react'
import styled from 'styled-components';

import TopBar from '../TopBar/TopBar';
import LeftMenu from '../LeftMenu/LeftMenu';
import MainContent from '../MainContent/MainContent';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import UserContent from './../UserContent/UserContent';

const Wrapper = styled.section`
`;

const Content = styled.div`
    display:flex;
    margin-top:20px;
`;



function MainPage() {
    return (
        <Router>
            <Wrapper>
                <TopBar/>
                <Content>
                    <LeftMenu/>
                    <Switch>
                        <Route path='/' exact component={MainContent} />
                        <Route path='/user' exact component={UserContent}/>       
                    </Switch>      
                </Content>
            </Wrapper>
        </Router>
    )
}

export default MainPage
