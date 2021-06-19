import styled from 'styled-components';
import EntitiesMiniBox from './EntitiesMiniBox/EntitiesMiniBox';
import Ic from '../icons/I';
import EntitiesFilter from  './EntitiesFilter/EntitiesFilter';
import { useState } from 'react';

const MiniBoxesContent = styled.div`
    background-color:white;
    width: 90%;
    height: auto;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    padding-top: 30px;
`;


const MiniBoxData = styled.div`
    background-color:white;
    box-shadow: 0 0 4px 0px gray;
    width: 100%;
    height: 60px;
    display:flex;
    margin: 10px;
`;
const MiniBoxDataLeft = styled.div`
    width: 60px;
    height: 60px;
    background-color: black;
    img {
        width: 60px;
        height: 60px;
    }
`;
const MiniBoxDataRight = styled.div`
    width: 80%;
    height: 100px;
    text-align: left;
    box-sizing: border-box;
    padding: 5px;
    &>h3 {
        margin:0;
    } 
`;
function ListViev({photoList}:any) {
    return (
        <MiniBoxesContent>
            {
                photoList.slice(0,50).map((v: any) => {
                    return (
                        <MiniBoxData>
                        <MiniBoxDataLeft>
                            <img src={v.url}></img>
                        </MiniBoxDataLeft>
                        <MiniBoxDataRight>
                            <h3>TITLE</h3>
                            <span>{v.title}</span>
                        </MiniBoxDataRight>
                        </MiniBoxData>
                    )
                })
            }  
        </MiniBoxesContent>
    )
}

export default ListViev
