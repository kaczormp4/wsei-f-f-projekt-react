import { FC } from "react";
import styled from "styled-components";
import Ic from "../../icons/I";

const FilteConstent = styled.div`
  box-sizing: border-box;
  background-color: white;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-left: 20px solid #f5f7f9;
  padding-top: 20px;
`;
const FilterBox = styled.div`
  width: 50;
  margin: 20px;
`;
const LineData = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: dotted 1px #d3d3d38f;
  padding-bottom: 10px;
  padding-top: 10px;
  img {
    width: 15px;
    margin-right: 10px;
  }
  span {
    margin-left: 20px;
  }
  input {
    background-color: #d3d3d38f;
    border: none;
    height: 30px;
    font-size: 1.2rem;
  }
`;
const AddFilter = styled.div`
  width: 100%;
  width: 50;
  margin: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
  img {
    width: 20px;
    margin-right: 0px;
  }
  span {
    margin-left: 10px;
  }
`;
const EntitiesFilter: FC = () => {
  return (
    <>
      <FilteConstent>
        <FilterBox>
          <LineData>
            <Ic iconName="close.svg" />
            <span>Where</span>
            <span>Company</span>
            <Ic iconName="arrow-down.png" size={0.7} />
            <span>Constains</span>
            <Ic iconName="arrow-down.png" size={0.7} />
            <input />
          </LineData>
          <LineData>
            <Ic iconName="close.svg" /> <span>Where</span>
            <span>Status</span> <Ic iconName="arrow-down.png" size={0.7} />
            <span>Is</span>
            <Ic iconName="arrow-down.png" size={0.7} />
            <input />
            <span>In</span> <Ic iconName="arrow-down.png" size={0.7} />
            <input />
          </LineData>
          <LineData>
            <Ic iconName="close.svg" /> <span>And</span>
            <span>Status</span> <Ic iconName="arrow-down.png" size={0.7} />
            <span>Ends before</span>
            <Ic iconName="arrow-down.png" size={0.7} />
            <input />
            <span>In</span> <Ic iconName="arrow-down.png" size={0.7} />
            <input />
          </LineData>
        </FilterBox>
        <AddFilter>
          <Ic iconName="add.svg" /> <span>Add Filter</span>
          <span>choose property</span>{" "}
          <Ic iconName="arrow-down.png" size={0.5} />
        </AddFilter>
      </FilteConstent>
    </>
  );
};

export default EntitiesFilter;
