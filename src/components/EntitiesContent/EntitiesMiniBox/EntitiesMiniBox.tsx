import React from 'react'
import styled from 'styled-components';

const MiniBoxData = styled.div`
    background-color:white;
    box-shadow: 0 0 4px 0px gray;
    width: 250px;
    height: 100px;
    display:flex;
    margin: 10px;
`;
const MiniBoxDataLeft = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    img {
        width: 100px;
        height: 100px;
    }
`;
const MiniBoxDataRight = styled.div`
    width: 150px;
    height: 100px;
    text-align: left;
    box-sizing: border-box;
    padding: 5px;
    &>h3 {
        margin:0;
    } 
`;
function EntitiesMiniBox({url, title}: any) {
    return (
        <MiniBoxData>
            <MiniBoxDataLeft>
             <img src={url}></img>
            </MiniBoxDataLeft>
            <MiniBoxDataRight>
                <h3>TITLE</h3>
                <span>{title}</span>
            </MiniBoxDataRight>
        </MiniBoxData>
    )
}

export default EntitiesMiniBox
