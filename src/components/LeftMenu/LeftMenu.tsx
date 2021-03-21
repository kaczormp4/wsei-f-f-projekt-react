import React from 'react';
import styled from 'styled-components';

const LeftMain = styled.div`
    width:400px;
    height:auto;
    background-color:rgb(245,247,249);
`;
const LeftMainPhotoBox = styled.div`
    width:300px;
    height:300px;
    background-color:#fff;
    margin:auto;
`;

function LeftMenu() {
    return (
        <LeftMain>
            <LeftMainPhotoBox>

                s
            </LeftMainPhotoBox>
        </LeftMain>
    )
}

export default LeftMenu
