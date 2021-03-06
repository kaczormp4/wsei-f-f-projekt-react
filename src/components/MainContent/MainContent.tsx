import React, { FC } from 'react';
import styled from 'styled-components';
import WorkspacesMiniBox from './Workspaces/WorkspacesMiniBox';
import ResumeYourWork from './ResumeYourWork/ResumeYourWork';
import LatestPublications from './LatestPublications/LatestPublications';
import data from './data';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';



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

  /* width */
  ::-webkit-scrollbar {
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  a{
    &:link, &:visited, &:hover, &:active {
     color: black;
     text-decoration: none;
    }
  }
`;

const ResumeYourWorkContainer = styled.div`
    width: 90%;
    margin-top:20px;
`;

const Wtitle = styled.div`
    width: 90%;
    height: 40px;
    margin-top:20px;
    text-align: left;
    font-size: 1.3rem;
`;

const renderWorkspacesMiniBox = data.allData.map(dt => 
    <Link to='/workspace'> 
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
    </Link>
    )
const MainContent:FC = () => {

    return (
        <ContainerContent>

            <FirstBox>
                <LatestPublications/>
            </FirstBox>
            <Wtitle>Workspaces</Wtitle>
            <WorkSpacesBox>
                {renderWorkspacesMiniBox}            
            </WorkSpacesBox>
            <ResumeYourWorkContainer>
                <ResumeYourWork/>
            </ResumeYourWorkContainer>
        </ContainerContent>
    )
}

export default MainContent
