import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const UserContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const TopNav = styled.div`
    background-color:white;
    width: 90%;
    height: 70px;
    display:flex;
    justify-content: flex-end;
`;
const UserInfo = styled.div`
    background-color:white;
    width: 90%;
    height:300px;
    display:flex;
`;
const PhotoBox = styled.div`
    width: auto;
    height:300px;
`;
const UserPhoto = styled.div`
    width: 150px;
    height: 150px;
    background-color:#2b352a;
    border-radius: 100px;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;

`;

const MainInfo = styled.div`
    width: calc(100% - 200px);
    height:300px;
    display:flex;
    justify-content: space-between;
    div {
        margin-top:50px;
    }
`;
const About = styled.div`
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    background-color:white;
    width: 90%;
    height: 500px;
    text-align: left;
    box-sizing: border-box;
    padding: 50px;
    span { 
        padding: 10px;
        background-color: #e6f0f3;
        margin-right: 20px;
    }
`;
const PanelInformation = styled.div`
    width: 90%;
    height:500px;
    background-color:white;
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
                    <UserPhoto></UserPhoto>
                    <span>See Profile</span>
                </PhotoBox>
                <MainInfo>
                    <div>
                        <p>Humwerta Swift</p>
                        <p>Clifford Chance</p>
                        <p>New Your Partner</p>
                    </div>
                    <div>
                        EMAIL @!#!@!$#!@$
                    </div>
                </MainInfo>
            </UserInfo>
            <About>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
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
