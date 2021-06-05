import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ResumeYourWork from '../MainContent/ResumeYourWork/ResumeYourWork';

const UserContentContainer = styled.div`
    width: calc(100% - 400px);
    height: 170vh;
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
    background-image: url('https://static.vitra.com/media/asset/1864940/storage/v_fullbleed_1440x/24012303.jpg');
    background-position: center;
    width: 100%;
    height:220px;
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`;
const BannerDesc = styled.div`
    background-color: white;
    width: 100%;
    height:130px;
    display:flex;
    box-sizing: border-box;
    align-items: center;
`;
const WorkspacesBox = styled.div`
    margin-top: 10px;
    background-color:white;
    width: 90%;
    height: auto;
    display:flex;
    box-sizing: border-box;
    padding-right:50px;

`;
const WorkspacesMiniBox = styled.div`
    width: 400px;
    height: 300px;
    display:flex;
    box-sizing: border-box;
    box-shadow: 0 0 5px 0px gray;
    flex-wrap: wrap;
    margin: 15px;
    div {
        width: 100%;
    }
`;
const LastUpdatesBox = styled.div`
    margin-top: 10px;
    background-color:f5f7f9;
    width: 90%;
    height:50px;
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;

`;
const ResumeYWCFilterBar = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    div {
      align-items: center;
    }
  }
`;
const InputBox = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  margin-right: 25px;
  input {
    border: none;
    outline: none;
    font-size: 1em;
    background-color: #f5f7f9;
  }
`;
const CategoriesBox = styled.div`
  background-color: f5f7f9;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const CategoriesMiniBox = styled.div`
  box-sizing: border-box;
  border: 1px solid red;
  width: fit-content;
  padding: 10px;
  margin-right: 10px;
`;

function WorkSpaceContent() {
    return (
        <UserContentContainer>
            <Banner>
                <BannerImg>
                </BannerImg>
                <BannerDesc>
                    <div>[ICON]</div>
                    <div>
                        <h1>Corporate holdings</h1>
                        Ad aliqua excepteur et adipisicing nulla in aliqua irure enim tempor aliqua.
                    </div>
                </BannerDesc>
            </Banner>
            <WorkspacesBox>
                <WorkspacesMiniBox>
                    <div>
                        [ICO]
                    </div>
                    <div>
                        Explore Lore Ipsum
                    </div>
                </WorkspacesMiniBox>
                <WorkspacesMiniBox>
                    <div>
                        [ICO]
                    </div>
                    <div>
                        Explore Lore Ipsum
                    </div>
                </WorkspacesMiniBox>
                <WorkspacesMiniBox>
                    <div>
                        [ICO]
                    </div>
                    <div>
                        Explore Lore Ipsum
                    </div>
                </WorkspacesMiniBox> 
            </WorkspacesBox>
            <LastUpdatesBox>
                {/* <ResumeYWCFilterBar>
                    <span>RESUME YOUR WORK</span>
                    <div>
                    <InputBox>
                        <input></input>&nbsp; Q &nbsp;
                    </InputBox>
                    <div>
                        FOLLOWED 
                    </div>
                    </div>
                </ResumeYWCFilterBar> */}
                <CategoriesBox>
                    <CategoriesMiniBox>
                        firt Cat
                    </CategoriesMiniBox>
                    <CategoriesMiniBox>
                        firt Cat
                    </CategoriesMiniBox>
                    <CategoriesMiniBox>
                        firt Cat
                    </CategoriesMiniBox>
                    <CategoriesMiniBox>
                        firt Cat
                    </CategoriesMiniBox>
                </CategoriesBox>
                <ResumeYourWork/>
            </LastUpdatesBox>
        </UserContentContainer>
    )
}

export default WorkSpaceContent
