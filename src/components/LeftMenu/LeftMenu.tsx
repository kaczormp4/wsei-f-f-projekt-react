import React from 'react';
import styled from 'styled-components';
import Ic from '../icons/I';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


const EmptyBox = styled.div`
    display:flex;
    align-items: center;
`;
const LeftMain = styled.div`
    width:400px;
    height:auto;
    background-color:rgb(245,247,249);
    a{
        &:link, &:visited, &:hover, &:active {
            color: black;
            text-decoration: none;
        }
    }
`;
const LeftMainPhotoBox = styled.div`
    width:300px;
    height:300px;
    background-color:#fff;
    margin:auto;
    box-shadow: 0 0 10px 0px #dfdfdf;
    border-radius:5px;
`;
const LeftMainPhotoBoxTop = styled.div`
    border-bottom:3px solid #f5f7f9;
    padding-bottom:20px;

`;
const LeftMainPhotoBoxAvatar = styled.div`
    width:100px;
    height:100px;
    background-color:#a02626;
    margin:auto;
    margin-top:10px;
    box-shadow: 0 0 10px 0px #dfdfdf;
    border-radius:100px;
`;
const LeftMainPhotoBoxBottom = styled.div`


`;
const LeftMainPhotoBoxBottomList = styled.ul`

`;
const LeftMainPhotoBoxBottomContent = styled.li`
    list-style-type: none;
    padding-bottom: 10px;
    text-align: left;
    display: flex;
    justify-content:space-between;
    width:90%;
`;
const ListBelowPhotoBox = styled.ul`

`;
const ListBelowPhotoBoxContent = styled.li`
    list-style-type: none;
    padding:10px;
    text-align:left;
`;

function LeftMenu() {
    return (
            <LeftMain>
                <LeftMainPhotoBox>
                <br/> 
                    <LeftMainPhotoBoxTop>
                        <Link to='/user' >
                            <LeftMainPhotoBoxAvatar>
                            photo
                            </LeftMainPhotoBoxAvatar>       
                            Name Surname
                        </Link>
                        <br/>    
                        Job title - Company
                    </LeftMainPhotoBoxTop>  
                    <LeftMainPhotoBoxBottom>
                        <LeftMainPhotoBoxBottomList>
                            <LeftMainPhotoBoxBottomContent>
                                <Link to='/404' >
                                    <EmptyBox>
                                        <Ic iconName="network.png"/>
                                        Your network
                                    </EmptyBox>
                                </Link>
                                <Ic iconName="user-plus.svg" border={true}/>
                            </LeftMainPhotoBoxBottomContent>
                            <LeftMainPhotoBoxBottomContent>
                                <Link to='/404' >
                                    <EmptyBox>                               
                                        <Ic iconName="publications.svg"/>
                                        Your Publications
                                    </EmptyBox>
                                </Link>              
                                <Ic iconName="plus.svg" border={true}/>
                            </LeftMainPhotoBoxBottomContent>
                        </LeftMainPhotoBoxBottomList>
                    </LeftMainPhotoBoxBottom>
                </LeftMainPhotoBox>
                <ListBelowPhotoBox>
                    <ListBelowPhotoBoxContent>
                        <Link to='/404' >
                            <EmptyBox> 
                                <Ic iconName="publications.svg"/>
                                Publications
                            </EmptyBox> 
                        </Link>
                    </ListBelowPhotoBoxContent>
                    <ListBelowPhotoBoxContent>
                        <Link to='/404' >
                            <EmptyBox> 
                                <Ic iconName="ecosystem.svg"/>
                                Ecosystem
                            </EmptyBox> 
                        </Link>
                    </ListBelowPhotoBoxContent>
                    <ListBelowPhotoBoxContent>
                        <Link to='/entities' >
                            <EmptyBox> 
                                <Ic iconName="entities.svg"/>
                                Entities
                            </EmptyBox> 
                        </Link>
                    </ListBelowPhotoBoxContent>
                </ListBelowPhotoBox>
            </LeftMain>
    )
}

export default LeftMenu
