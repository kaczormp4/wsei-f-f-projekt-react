import styled, { css } from "styled-components";
import { isConstructorDeclaration } from "typescript";
import Ic from "../../icons/I";
import { Link } from "react-router-dom";
import data from "../../MainContent/data";
import { IUsersReducer } from "../../../reducers/usersReducers";
import { IState } from "../../../reducers";
import { useSelector } from "react-redux";
import { IPhotoReducer } from "../../../reducers/photosReducers";

const MenuOpen = styled.div<{ isHide?: boolean }>`
  width: 250px;
  height: auto;
  background-color: white;
  z-index: 999;
  position: absolute;
  border: 3px solid #eeeeee;
  box-sizing: border-box;
  top: 60px; //zrobic zmienna, wartosci ustawione na sztuwno
  transition-duration: 0.4s;
  transition-timing-function: ease-in-out;
  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: black;
      text-decoration: none;
    }
  }
  ${(props) =>
    props.isHide
      ? css`
          left: -350px;
          transform: rotate3d(200, 1, 1, 45deg);
          opacity: 0.4;
        `
      : css`
          left: 0px;
        `}
`;
const ChoosedOption = styled.div``;
const Filter = styled.input`
  width: 90%;
  height: 20px;
`;
const CategoriesBox = styled.div`
  overflow: auto;
  height: 500px;
`;
const Categories = styled.div`
  text-align: left;
  ul {
    list-style-type: none;
    padding-left: 10px;

    li {
      display: flex;
      align-items: center;
      cursor: pointer;

      a {
        display: flex;
        align-items: center;
      }
      img {
        width: 25px;
      }
      &:hover {
        background-color: #d3d3d371;
        transition-duration: 0.4s;
      }
    }
  }
`;
const LogOut = styled.div`
  background-color: lightgrey;
  display: flex;
  align-items: center;
  text-align: center;
  img {
    width: 25px;
  }
`;
const PhotoAvatar = styled.img`
  width: 25px;
  margin-left: 7px;
  margin-right: 7px;
  border-radius: 20px;
`;
function OpenMenu(props: { isHide?: boolean }) {
  const { usersList } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));
  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));
  const workspaceslist = data.allData.map((v) => {
    return (
      <>
        <li>
          <Link to="/workspace">
            <Ic iconName={v.icon} /> {v.title}{" "}
          </Link>
        </li>
      </>
    );
  });
  return (
    <MenuOpen isHide={props.isHide}>
      <ChoosedOption>ARLEADY CHOOSED OPTION</ChoosedOption>
      <Filter placeholder="Filter..."></Filter>
      <CategoriesBox>
        <Categories>
          <ul>
            Platform
            <li>
              <Link to="/">
                <Ic iconName="house2.svg" /> Home{" "}
              </Link>
            </li>
            <li>
              <Link to="/404">
                <Ic iconName="publications.svg" /> Publications{" "}
              </Link>
            </li>
            <li>
              <Link to="/404">
                <Ic iconName="people.svg" /> People{" "}
              </Link>
            </li>
            <li>
              <Link to="/entities">
                <Ic iconName="entities2.svg" /> Entities{" "}
              </Link>
            </li>
            <li>
              <Link to="/404">
                <Ic iconName="administration.svg" /> Administration{" "}
              </Link>
            </li>
          </ul>
        </Categories>
        <Categories>
          <ul>
            Workspaces
            {workspaceslist}
          </ul>
        </Categories>
      </CategoriesBox>
      <Categories>
        <ul>
          Account
          <li>
            <Link to="/user">
              <PhotoAvatar src={photoList[0]?.url} />
              {usersList[0]?.name}{" "}
            </Link>
          </li>
          <li>
            <Link to="/404">
              <Ic iconName="privacy (1).svg" /> Privacy
            </Link>{" "}
          </li>
          <li>
            <Link to="/404">
              <Ic iconName="settings_1.svg" /> Settings
            </Link>{" "}
          </li>
        </ul>
      </Categories>
      <LogOut>
        <Ic iconName="logout_1.svg" /> Logout
      </LogOut>
    </MenuOpen>
  );
}

export default OpenMenu;

// <li><Link to='/404'><Ic iconName="publications.svg"/> Supplier contract </Link></li>
// <li><Link to='/404'><Ic iconName="people.svg"/> Corporate </Link></li>
// <li><Link to='/404'><Ic iconName="entities2.svg"/> Group Norms </Link></li>
// <li><Link to='/404'><Ic iconName="administration.svg"/> Real estate contracts </Link></li>
