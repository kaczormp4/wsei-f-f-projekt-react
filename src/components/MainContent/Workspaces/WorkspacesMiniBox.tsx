import React from "react";
import styled, { css } from "styled-components";
import Ic from "../../icons/I";

const WorkSpacesMiniBoxes = styled.div`
  width: 350px;
  height: 250px;
  background-color: white;
  box-shadow: 0 0 5px 1px #dfdfdf;
  margin: 2px;
  margin-right: 20px;
  flex: 0 0 auto;
  border-radius: 5px;
`;
const WmbBannerPhoto = styled.div<{ styleSrc: string }>`
  width: 100%;
  height: 120px;
  border-radius: 5px 5px 0 0;
  background-image: url(${(props) => props.styleSrc});
  background-size: cover;
  background-position: center;
  img {
    width: 100%;
    height: 100%;
    /* max-height:100%; 
        max-width:100%; */
    object-fit: contain;
    display: block;
  }
`;
const WmbLogoAndTittleBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
`;
const WmbLogoBox = styled.div`
  width: 30%;
  height: 70px;
  display: flex;
  justify-content: left;
  div {
    width: 90%;
    background-color: white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    height: 100px;
    position: relative;
    top: -30px;
    text-align: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const WmbTitleBox = styled.div`
  width: 60%;
  height: 70px;
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 20px;
  text-align: left;
`;
const WmbBottom = styled.div`
  width: 100%;
  height: auto;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  span{
      color:gray;
      font-size: 0.8em;
      padding-left: 10px;
  }
`;

function WorkspacesMiniBox(props: any) {
  return (
    <div>
      <WorkSpacesMiniBoxes>
        <WmbBannerPhoto styleSrc={props.urlImage}></WmbBannerPhoto>
        <WmbLogoAndTittleBox>
          <WmbLogoBox>
            <div>
              <Ic iconName={props.urlIcon} size={3} />
            </div>
          </WmbLogoBox>
          <WmbTitleBox>{props.mainTitle}</WmbTitleBox>
        </WmbLogoAndTittleBox>
        <WmbBottom>
          <Ic iconName={props.smallIcon1} size={0.71} /> {props.smallIcon1Type}{" "}
          * <Ic iconName={props.smallIcon2} size={0.71} />{" "}
          {props.smallIcon2Count}
        </WmbBottom>
        <WmbBottom><span>Last update {props.lastUpdate} days ago</span></WmbBottom>
      </WorkSpacesMiniBoxes>
    </div>
  );
}

export default WorkspacesMiniBox;
