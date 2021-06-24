import Rract, { FC, useState } from "react";
import styled from "styled-components";
import Ic from "../../icons/I";
import ResumeYourWorkContent from "./ResumeYourWorkContent/ResumeYourWorkContent";
import { useSelector } from "react-redux";
import { IState } from "../../../reducers";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IPostReducer } from "../../../reducers/postsReducers";
import { IPhotoReducer } from "../../../reducers/photosReducers";
import { stat } from "node:fs";
import ReactPaginate from "react-paginate";

const ResumeYWCFilterBar = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
  div {
    display: flex;
    div {
      align-items: center;
      img {
        width: 20px;
      }
    }
  }
`;
const ResumeYWCBoxContent = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  box-shadow: 0 0 5px 1px #dfdfdf;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px;
`;
const InputBox = styled.div`
  box-sizing: border-box;
  border: 1px solid lightgrey;
  padding-left: 25px;
  margin-right: 25px;
  border-radius: 10px;
  input {
    border: none;
    outline: none;
    font-size: 1em;
    background-color: #f5f7f9;
  }
`;
const Footer = styled.div`
  ul,
  li {
    text-decoration: none;
    list-style-type: none;
  }
  .pagination {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    position: relative;
    justify-content: center;
    color: black;

    .active {
      color: black;
      padding: 5px;
      border: 1px solid grey;
      cursor: pointer;
    }
    .break-me {
      padding: 5px;
    }
    .page {
      padding: 5px;
      margin: 5px;
      cursor: pointer;
      &:hover {
        background-color: lightgrey;
        font-weight: 500;
      }
    }
    .next {
      padding: 5px;
      border: 1px solid grey;
      margin: 5px;
      cursor: pointer;
      &:hover {
        background-color: lightgrey;
        font-weight: 500;
      }
    }
    .previous {
      box-sizing: border-box;
      padding: 5px;
      margin: 5px;
      border: 1px solid grey;
      cursor: pointer;
      &:hover {
        background-color: lightgrey;
        font-weight: 500;
      }
    }
  }
`;
const ResumeYourWork: FC = () => {
  const { usersList } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));
  const { postList } = useSelector<IState, IPostReducer>((state) => ({
    ...state.posts,
  }));
  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));
  //console.log(postList)
  const [currentPage, setCurrentPage] = useState<number>(0);
  const handlePageClick = (data: any) => {
    const selected = data.selected;
    setCurrentPage(selected);
  };

  const [textInput, setTextInput] = useState("");

  const handleChange = (event: any) => {
    setTextInput(event.target.value);
    filterRows();
  };
  const filterRows = () => {
    let worksFiltered = [...postList];
    if (textInput !== "") {
      const filterString = textInput.toLowerCase();
      worksFiltered = worksFiltered.filter((v) =>
        v.title.toLowerCase().includes(filterString)
      );
    }
    return worksFiltered;
  };
  const filtredRowsList = filterRows();

  return (
    <>
      <ResumeYWCFilterBar>
        <span>RESUME YOUR WORK</span>
        <div>
          <InputBox>
            <input
              placeholder={"Filter by title.."}
              onChange={handleChange}
            ></input>
            &nbsp; Q &nbsp;
          </InputBox>
          <div>
            <Ic iconName="wifi.svg" />
            FOLLOWED <Ic iconName="arrow-down.svg" size={0.8} />
          </div>
        </div>
      </ResumeYWCFilterBar>
      {filtredRowsList.slice(currentPage, currentPage + 10).map((v) => (
        <ResumeYourWorkContent key={v.id} title={v.title} content={v.body} />
      ))}
      <Footer>
        <ReactPaginate
          previousLabel={"PREVIOUS"}
          nextLabel={"NEXT"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={postList.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          pageClassName={"page"}
          previousClassName={"previous"}
          nextClassName={"next"}
        />
      </Footer>
    </>
  );
};

export default ResumeYourWork;
