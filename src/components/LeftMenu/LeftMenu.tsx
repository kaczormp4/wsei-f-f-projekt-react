import React from 'react';
import styled from 'styled-components';
import Ic from '../icons/I';

const EmptyBox = styled.div`
    display:flex;
    align-items: center;
`;
const LeftMain = styled.div`
    width:400px;
    height:auto;
    background-color:rgb(245,247,249);
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
                    <LeftMainPhotoBoxAvatar>
                    photo
                    </LeftMainPhotoBoxAvatar>       
                    Name Surname
                    <br/>    
                    Job title - Company
                </LeftMainPhotoBoxTop>  
                <LeftMainPhotoBoxBottom>
                    <LeftMainPhotoBoxBottomList>
                        <LeftMainPhotoBoxBottomContent>
                            <EmptyBox>
                                <Ic iconName="network.png"/>
                                Your network
                            </EmptyBox>
                            <Ic iconName="user-plus.svg" border={true}/>
                        </LeftMainPhotoBoxBottomContent>
                        <LeftMainPhotoBoxBottomContent>
                            <EmptyBox>                               
                                <Ic iconName="publications.svg"/>
                                Your Publications
                            </EmptyBox>
                            <Ic iconName="plus.svg" border={true}/>
                        </LeftMainPhotoBoxBottomContent>
                    </LeftMainPhotoBoxBottomList>
                </LeftMainPhotoBoxBottom>
            </LeftMainPhotoBox>
            <ListBelowPhotoBox>
                <ListBelowPhotoBoxContent>
                    <EmptyBox> 
                        <Ic iconName="publications.svg"/>
                        Publications
                    </EmptyBox> 
                </ListBelowPhotoBoxContent>
                <ListBelowPhotoBoxContent>
                    <EmptyBox> 
                        <Ic iconName="ecosystem.svg"/>
                        Ecosystem
                    </EmptyBox> 
                </ListBelowPhotoBoxContent>
                <ListBelowPhotoBoxContent>
                    <EmptyBox> 
                        <Ic iconName="entities.svg"/>
                        Entities
                    </EmptyBox> 
                </ListBelowPhotoBoxContent>
            </ListBelowPhotoBox>
        </LeftMain>
    )
}

export default LeftMenu
