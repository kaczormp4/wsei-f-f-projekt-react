import styled, { css } from 'styled-components';
import EntitiesMiniBox from './EntitiesMiniBox/EntitiesMiniBox';
import Ic from '../icons/I';
import EntitiesFilter from  './EntitiesFilter/EntitiesFilter';
import { useState } from 'react';

const MiniBoxesContent = styled.div<{fullScreen?:boolean}>`
    ${props => props.fullScreen
         ? css`width: 90%;`
         : css`width: 100%;` 
    }
    background-color:white;

    min-height: 90vh;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    padding-top: 30px;
`;


function GridViev(props: any) {
    return (
        <MiniBoxesContent>
            
            {
                props.photoList.slice(0,50).map((v: any) => {
                    return (
                        <EntitiesMiniBox url={v.url} title={v.title}/>
                    )
                })
            }  
        </MiniBoxesContent>
    )
}

export default GridViev
