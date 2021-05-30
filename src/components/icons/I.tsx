import React, { Component } from 'react'
import styled, { css } from 'styled-components';

const I = styled.img<{border?: boolean, size?: any}>`
    margin:5px;
    padding:2px;
    transform: scale(${props => props.size});
    ${props => props.border && css`
        border: 2px solid #616161;
        border-radius: 4px;
        padding-right: 7px;
        padding-left: 7px;
    `}
`;

function Ic(props : {border?: boolean, iconName: string, size?: any}) {
    return (
        <>
         <I src={`icons/${props.iconName}`} border={props.border} size={props.size}/>
        </>        
    )
}

export default Ic;
