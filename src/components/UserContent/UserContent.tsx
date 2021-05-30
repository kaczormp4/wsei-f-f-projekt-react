import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const UserContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const TopNav = styled.div`
    width: 90%;
    height: 70px;
    background-color:white;
    display:flex;
    justify-content: flex-end;
`;
const UserInfo = styled.div`
    width: 90%;
    height:300px;
    background-color:#110e0e;
    display:flex;
`;
const PhotoBox = styled.div`
    width: 30%;
    height:300px;
    background-color:#3fc52e;
`;
const MainInfo = styled.div`
    width: 70%;
    height:300px;
    background-color:#662828;
`;
const About = styled.div`
    width: 90%;
    height:500px;
    background-color:#db5959;
`;
const PanelInformation = styled.div`
    width: 90%;
    height:500px;
    background-color:#33a11f;
`;
const SerwicesAndProjects = styled.div`
    width: 90%;
    height:500px;
    background-color:#608a59;
`;
const Proposals = styled.div`
    width: 90%;
    height:500px;
    background-color:#b7c3b5;
`;
const InternalRewiews = styled.div`
    width: 90%;
    height:500px;
    background-color:#194a79;
`;
const AmountOfFes = styled.div`
width: 90%;
height:500px;
background-color:#199c1f;
`;
function UserContent(){
    return (
        <UserContentContainer>
            <TopNav>
                <div>ICO MESSAGE</div>
                <div>ICO CREATE A REQUEST</div>
                <div>ICO ADD A CLUSTER</div>
                <div>ICO X</div>
            </TopNav>
            <UserInfo>
                <PhotoBox>
                </PhotoBox>
                <MainInfo></MainInfo>
            </UserInfo>
            <About>

            </About>
            <PanelInformation>

            </PanelInformation>
            <SerwicesAndProjects>

            </SerwicesAndProjects>       
            <Proposals>

            </Proposals>      
            <InternalRewiews>

            </InternalRewiews>   
            <AmountOfFes>

            </AmountOfFes> 
        </UserContentContainer>
    )
}

export default UserContent
