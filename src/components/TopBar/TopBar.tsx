import React, { useState } from 'react'
import styled from 'styled-components';
import { Wrapper } from '../../styleHelpers/Components';
import Ic from '../icons/I';
import OpenMenu from './OpenMenu/OpenMenu';
import { Link } from 'react-router-dom';

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
    border:2px solid #83838397;
    box-sizing:border-box;
    padding-top:2px;
    border-radius:10px;
    box-sizing: border-box;
    height:45px;
`;
const SearchBarInput = styled.input`
    width:600px;
    height:35px;
    font-size:2em;
    background-color: transparent;
    border:none;
    outline:none;

`;
const RightSite = styled.div`

`;
const handleMenuOpen  = () => {
    console.log("ss")
};

function TopBar() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Wrapper2>
            <LeftSite onClick={() => setIsOpen(!isOpen)}>
                <Link to='/'><Ic iconName={"logo.png"}/></Link>
                <Ic iconName={"house2.svg"}/>
                <span>Home</span>
                <Ic iconName={"arrow-down.svg"}/>            
            </LeftSite>
            {isOpen ? <OpenMenu isHide={true}/> : <OpenMenu isHide={false}/>}
            <SearchBar>
                <SearchBarInput placeholder=" Search Legalcluster"/>
                <Ic iconName={"search.svg"}/>
            </SearchBar>
            <RightSite>
                <Link to='/'><Ic iconName={"house.svg"}/></Link>
                <Link to='/404'><Ic iconName={"comments.svg"}/></Link>
                <Link to='/404'><Ic iconName={"bell.svg"}/></Link>
            </RightSite>
        </Wrapper2>
    )
}

export default TopBar
