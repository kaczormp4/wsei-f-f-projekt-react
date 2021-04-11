import React, { Component } from 'react'
import styled from 'styled-components';

const I = styled.img`
    margin:5px;
`;

function Ic(props : any) {
    return (
        <>
         <I src={`icons/${props.iconName}`} />
        </>        
    )
}

export default Ic;
