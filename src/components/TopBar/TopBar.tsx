import React, { useState } from 'react'
import styled from 'styled-components';
import {Wrapper} from '../../styleHelpers/Components';
import Ic from '../icons/I';
import OpenMenu from './OpenMenu/OpenMenu';

const EmptyBox = styled.div`

`;
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
    display:flex;
    align-items: center;
    cursor:pointer;
    span {
        width:300px;
        text-align:left;
    }
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
const handleMenuOpen  = () => {
    console.log("ss")
};

function TopBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper2>
            <LeftSite onClick={() => setIsOpen(!isOpen)}>
                <Ic iconName={"logo.png"}/>
                <Ic iconName={"house2.svg"}/>
                <span>Home</span>
                <Ic iconName={"arrow-down.svg"}/>            
            </LeftSite>
            {isOpen ? <OpenMenu isHide={true}/> : <OpenMenu isHide={false}/>}
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
