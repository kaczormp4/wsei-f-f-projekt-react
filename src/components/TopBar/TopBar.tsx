import React from 'react'
import styled from 'styled-components';
import {Wrapper} from '../../styleHelpers/Components';
import Ic from '../icons/I';

const Wrapper2 = styled(Wrapper)`
    box-sizing:border-box;
    padding-top:10px;
    padding-bottom:10px;
    height:60px;
    background-color:white;
    box-shadow: 0 0 10px 1px #b6b6b6;
    display:flex;
    justify-content:space-between;
`;
const LeftSite = styled.div`

`;
const SearchBar = styled.div`
    outline:2px solid black;
    box-sizing:border-box;
    padding-top:2px;
`;
const SearchBarInput = styled.input`
    width:600px;
    height:35px;
    font-size:2em;
    border:none;
    outline:none;
`;
const RightSite = styled.div`

`;

function TopBar() {
    return (
        <Wrapper2>
            <LeftSite>
                <Ic iconName={"logo.png"}/>
                <Ic iconName={"house2.svg"}/>
                Home
                <Ic iconName={"arrow-down.svg"}/>
            </LeftSite>
            <SearchBar>
                <SearchBarInput placeholder="Search Legalcluster"/>
                <Ic iconName={"search.svg"}/>
            </SearchBar>
            <RightSite>
                <Ic iconName={"house.svg"}/> 
                <Ic iconName={"comments.svg"}/> 
                <Ic iconName={"bell.svg"}/> 
            </RightSite>
        </Wrapper2>
    )
}

export default TopBar
