import styled , { css } from 'styled-components';
import EntitiesMiniBox from './EntitiesMiniBox/EntitiesMiniBox';
import Ic from '../icons/I';
import EntitiesFilter from  './EntitiesFilter/EntitiesFilter';
import { useState } from 'react';
import GridViev from './GridViev';
import ListViev from './ListView';
import { IPhotoReducer } from '../../reducers/photosReducers';
import { IState } from '../../reducers'
import { useSelector } from 'react-redux';

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
    img {
        width: 20px
    }
`;
const FilterBar = styled.div`
    background-color:white;
    width: 90%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 20px;
    div{
        display: flex;
        align-items: center;
        img {
            width: 20px
        }
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
    cursor: pointer;
`;

const MiniBoxesContent = styled.div`
    background-color:white;
    width: 90%;
    height: auto;
    display:flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    padding-top: 30px;
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
const MosaicButton = styled.div<{isHide?: string}>`
    cursor: pointer;
    
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 10px;
    margin-left: 15px;
    color: #364aa3;
    font-weight: 600;
    display:flex;
    align-items: center;
    ${props => props.isHide == 'grid'
        ? css`background-color: #eaecf5;`
        :css`background-color: #white;` 
    }
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }

`;
const ListButton = styled.div<{isHide?: string}>`
    cursor: pointer;
    background-color: white;
    box-shadow: 0 0 2px 0px #364aa3;
    padding: 5px;
    margin-right: 15px;
    color: #364aa3;
    font-weight: 600;
    display:flex;
    align-items: center;
    ${props => props.isHide == 'list'
        ? css`background-color: #eaecf5;`
        :css`background-color: #white;` 
    }
    &:hover {
        background-color: #cfffa8;
        color: #626262;
    }
`;

function EntitiesContent(props : {isHide?: boolean}) {
    const { photoList } = useSelector<IState, IPhotoReducer>(state => ({
        ...state.photos
      }));
      console.log(photoList)
    const [openFilter, isOpen] = useState(false);
    const [viewType, isViewType] = useState('grid');
    
    return (
        <EntitiesContentContainer>
            <TopNav>
                    <div>
                        <h3>Entities</h3>
                    </div>
                    <div>
                        <MosaicButton isHide={viewType} onClick={() => isViewType('grid')}>
                            <Ic iconName='visualization.svg'/> {viewType == 'grid' ? 'MOSAIC' : null}
                            </MosaicButton>
                        <ListButton isHide={viewType} onClick={() => isViewType('list')}>
                            <Ic iconName='list.svg'/>{viewType == 'list' ? 'LIST' : null}
                        
                        </ListButton>
                    </div>
            </TopNav>
            <FilterBar>
                <div>
                    <FilterBarAll><Ic iconName='target.svg'/> ALL <Ic iconName='arrow-down.png' size='0.6'/></FilterBarAll>
                    <DottBox> • • •</DottBox>
                    <BorderLeft onClick={() => isOpen(!openFilter)}><Ic iconName='sort.svg'/>SORT <Ic iconName='filter.svg'/> FILTERS</BorderLeft>
                    <BorderLeft><Ic iconName='resize.svg'/>ARROW</BorderLeft>
                    <BorderLeft><Ic iconName='share.svg'/>SHARE</BorderLeft>
                </div>
                <div>
                    <SearchBox><input></input><b>Q</b></SearchBox>
                    <Followed><Ic iconName='wifi-signal.svg'/> FOLLOWED <Ic iconName='arrow-down.png' size='0.6'/></Followed>
                </div>
            </FilterBar>
            {openFilter && <EntitiesFilter/>}
            {viewType === 'grid'?
              <GridViev photoList={photoList}/>
              :
              <ListViev photoList={photoList}/>
             }
        </EntitiesContentContainer>
    )
}

export default EntitiesContent
