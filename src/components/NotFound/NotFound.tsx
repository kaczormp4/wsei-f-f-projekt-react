import styled from "styled-components";
import React, { FC } from 'react';

const NotFoundBox = styled.div` 
    position: relative;
    display: flex;
    overflow-x: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: calc(100% - 400px);
    height: 90vh;

    p {
        margin: 0;
    }
    span {
        font-size: 30rem;

        text-align: center;
        color: lightgray;
    }
`;

const NotFound: FC = () => {

    return (
        <NotFoundBox>
            <p>This is a mock page</p>
            <p>Go away</p>
            <span>404</span>
        </NotFoundBox>
    );
}


export default NotFound;