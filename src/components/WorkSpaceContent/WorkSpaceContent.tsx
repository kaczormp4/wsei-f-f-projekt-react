import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const UserContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const Banner = styled.div`
    background-color:white;
    width: 90%;
    height:350px;
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;
const BannerImg = styled.div`
    background-color: brown;
    width: 100%;
    height:220px;
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;
const BannerDesc = styled.div`
    background-color: lightcoral;
    width: 100%;
    height:130px;
    display:flex;
    box-sizing: border-box;
`;
const WorkspacesBox = styled.div`
    background-color:white;
    width: 90%;
    height:300px;
    display:flex;
    box-sizing: border-box;
    padding-right:50px;
`;
function WorkSpaceContent() {
    return (
        <UserContentContainer>
            <Banner>
                <BannerImg>
                ss
                </BannerImg>
                <BannerDesc>
                    s242
                </BannerDesc>
            </Banner>
            <WorkspacesBox>
                s
            </WorkspacesBox>
        </UserContentContainer>
    )
}

export default WorkSpaceContent
