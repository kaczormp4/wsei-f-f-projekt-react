import { FC } from "react";
import styled from "styled-components";
import Ic from "../../icons/I";
import { IPhotoReducer } from "../../../reducers/photosReducers";
import { IState } from "../../../reducers";
import { useSelector } from "react-redux";
import { IUsersReducer } from "../../../reducers/usersReducers";

const PhotoLeft = styled.div`
  width: 400px;
  height: 400px;
  background-image: radial-gradient(lightgrey, #dfdfdf, grey);
  box-shadow: 0 0 5px 1px #dfdfdf;
  position: relative;

  img {
    height: 400px;
    position: absolute;
    left: 0;
    z-index: 0;
  }
`;
const PhotoLeftDesc = styled.div`
  width: 100%;
  position: absolute;
  text-align: left;
  margin: 6px;
  z-index: 999;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 300px;
  div {
    margin-left: 30px;
    margin-top: 10px;
    img {
      width: 20px;
      height: 20px;
      box-shadow: 0 0 10px 0 black;
      border-radius: 20px;
    }
  }
`;
const ContentRight = styled.div`
  width: calc(100% - 400px);
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 0 5px 1px #dfdfdf;
`;
const PublicationContainer = styled.div`
  width: 90%;
  height: 330px;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
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
`;
const PublicationBox = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0 0 5px 1px #dfdfdf;
  display: flex;
  margin-top: 20px;
`;

const MiniPhoto = styled.div`
  width: 100px;
  height: 100px;
  img {
    width: 100px;
    height: 100px;
  }
`;
const PBCContainer = styled.div`
  width: calc(100% - 100px);
  box-sizing: border-box;
  margin: 4px;
  margin-bottom: 0px;
`;
const PBContent = styled.div`
  height: 70px;
  text-align: left;
  color: #0066aabc;
  font-size: 1.2rem;
  font-weight: bold;
`;
const PBInfo = styled.div`
  height: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  span {
    color: grey;
  }
  img {
    width: 20px;
    border-radius: 20px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
const LatestPublications: FC = () => {
  const { photoList } = useSelector<IState, IPhotoReducer>((state) => ({
    ...state.photos,
  }));

  const { usersList } = useSelector<IState, IUsersReducer>((state) => ({
    ...state.users,
  }));

  const renderPublications = photoList.slice(0, 20).map((v: any) => {
    return (
      <PublicationBox>
        <MiniPhoto>
          <img src={v?.url} />
        </MiniPhoto>
        <PBCContainer>
          <PBContent>{v?.title}</PBContent>
          <PBInfo>
            <span>7 jan 2020</span> <img src={photoList[0]?.url} />
            <span>{usersList[0]?.name}</span>
          </PBInfo>
        </PBCContainer>
      </PublicationBox>
    );
  });

  return (
    <>
      <PhotoLeft>
        <img src={photoList[0]?.url} />
        <PhotoLeftDesc>
          <span>
            Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
            przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
            n
          </span>
          <div>
            <span>7 jan 2020</span> <img src={photoList[0]?.url} />
            {usersList[0]?.name}
          </div>
        </PhotoLeftDesc>
      </PhotoLeft>
      <ContentRight>
        <span>Latest Publications</span>
        <PublicationContainer>{renderPublications}</PublicationContainer>
        see more publications
      </ContentRight>
    </>
  );
};

export default LatestPublications;
