import React, { Component } from 'react'
import styled, { css } from 'styled-components';

const I = styled.img<{border?: boolean}>`
    margin:5px;
    padding:2px;
    ${props => props.border && css`
        border: 2px solid black;
    `}
`;

function Ic(props : {border?: boolean, iconName: string}) {
    return (
        <>
         <I src={`icons/${props.iconName}`} border={props.border}/>
        </>        
    )
}

export default Ic;
