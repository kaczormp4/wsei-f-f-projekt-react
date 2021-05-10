import React from 'react';
import styled from 'styled-components';
import WorkspacesMiniBox from './Workspaces/WorkspacesMiniBox';
import ResumeYourWork from './ResumeYourWork/ResumeYourWork';
import LatestPublications from './LatestPublications/LatestPublications';
import data from './data';

const ContainerContent = styled.div`
    width: calc(100% - 400px);
`;
const FirstBox = styled.div`
    width: 90%;
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    display:flex;
`;

const WorkSpacesBox = styled.div`
    width: 90%;
    margin-top:20px;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    /* &::-webkit-scrollbar {
    display: none;
  } */
`;

const ResumeYourWorkContainer = styled.div`
    width: 90%;
    margin-top:20px;
`;

const Footer = styled.div`
    width: 90%;
    height: 50px;
    margin-top:20px;
`;

const renderWorkspacesMiniBox = data.allData.map(dt => 
    <WorkspacesMiniBox
        urlImage={dt.banner} 
        urlIcon={dt.icon}
        mainTitle={dt.title}
        smallIcon1={dt.smallIcon}
        smallIcon1Type={dt.smallIconType}
        smallIcon2={dt.smallIcon2}
        smallIcon2Count={dt.userCount}
        lastUpdate={dt.lastUpdate}
        />
    )
function MainContent() {
    return (
        <ContainerContent>

            <FirstBox>
                <LatestPublications/>
            </FirstBox>
            Workspaces
            <WorkSpacesBox>
                {renderWorkspacesMiniBox}            
            </WorkSpacesBox>
            <ResumeYourWorkContainer>
                <ResumeYourWork/>
            </ResumeYourWorkContainer>
            <Footer>
                next 1 2 3 4 prv
            </Footer>
        </ContainerContent>
    )
}

export default MainContent
