import React from 'react'
import styled from 'styled-components';
import {Wrapper} from '../../styleHelpers/Components';

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

`;
const SearchBarInput = styled.input`
    width:600px;
    height:35px;
    font-size:2em;
`;
const RightSite = styled.div`

`;

function TopBar() {
    return (
        <Wrapper2>
            <LeftSite>
                icon icon HOME 
            </LeftSite>
            <SearchBar>
                <SearchBarInput placeholder="Search Legalcluster"></SearchBarInput>
            </SearchBar>
            <RightSite>
                HOME MESSAGE NOTIFICATIONS 
            </RightSite>
        </Wrapper2>
    )
}

export default TopBar
