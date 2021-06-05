import React from 'react'
import styled from 'styled-components';
import EntitiesMiniBox from './EntitiesMiniBox/EntitiesMiniBox';

const EntitiesContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const TopNav = styled.div`
    background-color:white;
    width: 90%;
    height: 70px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    &>div>h3{
        margin-left:15px;
    }
    &> div { 
        display:flex;
    }
`;
const FilterBar = styled.div`
    background-color:white;
    width: 90%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
    }
`;
const FilterBarAll = styled.div`
    cursor: pointer;
    background-color: #eaecf5;
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 5px;
    margin-left: 15px;
    color: #364aa3;
    font-weight: 600;
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
`;
const DottBox = styled.div`
    padding-bottom: 6px;
    margin-left: 5px;
    color: #364aa3;
    font-weight: 800;
    font-size: 1.5rem;
`;
const BorderLeft = styled.div`
    box-sizing: border-box;
    border-left: 1px solid gray;
    margin-left: 5px;
    color: grey;
    padding: 5px;
`;

const MiniBoxesContent = styled.div`
    background-color:white;
    width: 90%;
    height: auto;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;

const SearchBox = styled.div`
    background-color:white;
    height: 35px;
    display:flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    border: 2px solid lightgray;
    justify-content: space-between;
    margin-right: 10px;
    border-radius: 2px;
    padding-left: 5px;
    padding-right: 5px;
    &>input {
        border:none;
        outline:none;
    }
`;
const Followed = styled.div`
    margin-right: 15px;
    cursor: pointer;
    background-color: #eaecf5;
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 5px;
    margin-left: 15px;
    color: #364aa3;
    font-weight: 600;
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
`;
const MosaicButton = styled.div`
    cursor: pointer;
    background-color: #eaecf5;
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 5px;
    margin-left: 15px;
    color: #364aa3;
    font-weight: 600;
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
`;
const ListButton = styled.div`
    cursor: pointer;
    background-color: white;
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 5px;
    margin-right: 15px;
    color: #364aa3;
    font-weight: 600;
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
`;
function EntitiesContent() {
    return (
        <EntitiesContentContainer>
            <TopNav>
                    <div>
                        <h3>Entities</h3>
                    </div>
                    <div>
                        <MosaicButton>[ICO] MOSAIC</MosaicButton>
                        <ListButton>[ICO]</ListButton>
                    </div>
            </TopNav>
            <FilterBar>
                <div>
                    <FilterBarAll>[ICO] ALL [ICO]</FilterBarAll>
                    <DottBox> • • •</DottBox>
                    <BorderLeft>[ICO]SORT [ICO]FILTERS</BorderLeft>
                    <BorderLeft>[ICO]ARROW</BorderLeft>
                    <BorderLeft>[ICO]SHARE</BorderLeft>
                </div>
                <div>
                    <SearchBox><input></input><b>Q</b></SearchBox>
                    <Followed>[ICO] FOLLOWED [ICO]</Followed>
                </div>
            </FilterBar>
            <MiniBoxesContent>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
              <EntitiesMiniBox/>
            </MiniBoxesContent>
        </EntitiesContentContainer>
    )
}

export default EntitiesContent
