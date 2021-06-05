import React from 'react'
import styled from 'styled-components';

const EntitiesContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const TopNav = styled.div`
    background-color:white;
    width: 90%;
    height: 70px;
    display:flex;
    justify-content: space-between;

`;
const FilterBar = styled.div`
    background-color:white;
    width: 90%;
    display:flex;
    div{
        display: flex;
        align-items: center;
    }
`;
const FilterBarAll = styled.div`
    border:1px solid black;
    padding:5px;
    margin-left:15px;
`;

const MiniBoxesContent = styled.div`
    background-color:white;
    width: 90%;
    height: auto;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
`;
const MiniBoxData = styled.div`
    background-color:white;
    box-shadow: 0 0 4px 0px gray;
    width: 250px;
    height: 100px;
    display:flex;
    margin: 10px;
`;
function EntitiesContent() {
    return (
        <EntitiesContentContainer>
            <TopNav>
                    <div>
                        <h3>Entities</h3>
                    </div>
                    <div>
                        MOSAIC LIST
                    </div>
            </TopNav>
            <FilterBar>
                <div>
                    <FilterBarAll>[ICO] ALL [ICO]</FilterBarAll>
                    <div>...</div>
                    <div>SORT</div>
                    <div>FILTERS</div>
                    <div>ARROW</div>
                    <div>SHARE</div>
                </div>
                <div>
                    
                </div>
            </FilterBar>
            <MiniBoxesContent>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
                <MiniBoxData></MiniBoxData>
            </MiniBoxesContent>
        </EntitiesContentContainer>
    )
}

export default EntitiesContent
