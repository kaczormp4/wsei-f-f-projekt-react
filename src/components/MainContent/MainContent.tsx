import React from 'react';
import styled from 'styled-components';

const ContainerContent = styled.div`
    width: calc(100% - 400px);
`;
const FirstBox = styled.div`
    width: 90%;
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    display:flex;
`;
const FirstPhotoLeft = styled.div`
    width: 400px;
    height: 400px;
    background-color:#0b8a00;
    box-shadow: 0 0 5px 1px #dfdfdf;
`;
const FirstContentRight = styled.div`
    width: calc(100% - 400px);
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
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
const WorkSpacesMiniBoxes = styled.div`
    width: 350px;
    height: 250px;
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    display:flex;
    margin:2px;
    margin-right:20px;
    flex: 0 0 auto;

`;
const ResumeYourWorkContainer = styled.div`
    width: 90%;
    margin-top:20px;
`;
const ResumeYWCFilterBar = styled.div`
    width: 100%;
`;
const ResumeYWCBoxContent = styled.div`
    width: 100%;
    height: 100px;
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    margin-top:20px;
`;
const Footer = styled.div`
    width: 90%;
    height: 50px;
    margin-top:20px;
`;

function MainContent() {
    return (
        <ContainerContent>

            <FirstBox>
                <FirstPhotoLeft>
                    Esse nulla laboris nostrud cupidatat nulla.
                </FirstPhotoLeft>
                <FirstContentRight>
                    s
                </FirstContentRight>
            </FirstBox>
            
            <WorkSpacesBox>
                
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
              <WorkSpacesMiniBoxes></WorkSpacesMiniBoxes>
            </WorkSpacesBox>
            <ResumeYourWorkContainer>
                <ResumeYWCFilterBar>
                    RESUME YOUR WORK
                </ResumeYWCFilterBar>
          
                <ResumeYWCBoxContent>
                i
                </ResumeYWCBoxContent>

                <ResumeYWCBoxContent>
                i
                </ResumeYWCBoxContent>

                <ResumeYWCBoxContent>
                i
                </ResumeYWCBoxContent>

                <ResumeYWCBoxContent>
                i
                </ResumeYWCBoxContent>
            </ResumeYourWorkContainer>
            <Footer>
                next 1 2 3 4 prv
            </Footer>
        </ContainerContent>
    )
}

export default MainContent
