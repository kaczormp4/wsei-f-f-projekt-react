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


function GridViev({photoList}: any) {
    return (
        <MiniBoxesContent>
            
            {
                photoList.slice(0,50).map((v: any) => {
                    return (
                        <EntitiesMiniBox url={v.url} title={v.title}/>
                    )
                })
            }  
        </MiniBoxesContent>
    )
}

export default GridViev
