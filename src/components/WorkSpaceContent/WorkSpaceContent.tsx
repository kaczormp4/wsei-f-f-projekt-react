import React from 'react'
import styled, { css } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ResumeYourWork from '../MainContent/ResumeYourWork/ResumeYourWork';
import Ic from '../icons/I';
import filtedata from './filterdata';
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
    div {
        margin:10px;
        margin-left:20px;
        text-align: left;
    }
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
    box-shadow: 0 0 10px 0px gray;
    border-radius: 10px;
    background-color: #d3d3d33e;
    flex-wrap: wrap;
    margin: 15px;
    padding: 30px;
    img {
        width: 100px;
    }
    div {
        margin-top: 20px;
        width: 100%;
        text-align: left;
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
const CategoriesMiniBox = styled.div<{bgcolor?: string, border:string}>`
  box-sizing: border-box;
  box-shadow: 0 0 5px 0 ${props => props.border};
  width: fit-content;
  padding: 10px;
  margin-right: 10px;
  background-color: ${props => props.bgcolor};
  &:hover {
      font-weight: bold;
      cursor: pointer;
      padding-top: 2px;
  }
`;

function WorkSpaceContent() {
    return (
        <UserContentContainer>
            <Banner>
                <BannerImg>
                </BannerImg>
                <BannerDesc>
                    <div><Ic iconName='entities2.svg' size='3'/></div>
                    <div>
                        <h1>Corporate holdings</h1>
                        Ad aliqua excepteur et adipisicing nulla in aliqua irure enim tempor aliqua.
                    </div>
                </BannerDesc>
            </Banner>
            <WorkspacesBox>
                <WorkspacesMiniBox>
                    <div>
                        <Ic iconName='entities2.svg'/>
                    </div>
                    <div>
                    sunt aut facere repellat provident occaecati excepturi optio reprehenderit
                    </div>
                </WorkspacesMiniBox>
                <WorkspacesMiniBox>
                    <div>
                        <Ic iconName='diagram.svg' />
                    </div>
                    <div>     
                      st rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possim
                    </div>
                </WorkspacesMiniBox>
                <WorkspacesMiniBox>
                    <div>
                        <Ic iconName='calendar.png' />
                    </div>
                    <div>
                        eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut
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
                    {filtedata.allData.map(v => (
                        <CategoriesMiniBox bgcolor={v.color} border={v.borderColor} >
                        {v.title}
                        </CategoriesMiniBox>
                    ))}
                </CategoriesBox>
                <ResumeYourWork/>
            </LastUpdatesBox>
        </UserContentContainer>
    )
}

export default WorkSpaceContent
