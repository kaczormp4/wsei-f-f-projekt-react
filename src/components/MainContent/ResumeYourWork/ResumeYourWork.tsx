import styled from "styled-components";
import Ic from "../../icons/I";
import ResumeYourWorkContent from './ResumeYourWorkContent/ResumeYourWorkContent';

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
  border: 1px solid black;
  margin-right: 25px;
  input {
    border: none;
    outline: none;
    font-size: 1em;
    background-color: #f5f7f9;
  }
`;

function ResumeYourWork() {
  return (
    <>
      <ResumeYWCFilterBar>
        <span>RESUME YOUR WORK</span>
        <div>
          <InputBox>
            <input></input>&nbsp; Q &nbsp;
          </InputBox>
          <div>
            <Ic iconName="house.svg" />
            FOLLOWED <Ic iconName="house.svg" />
          </div>
        </div>
      </ResumeYWCFilterBar>

      <ResumeYourWorkContent/>
      <ResumeYourWorkContent/>
      <ResumeYourWorkContent/>
      <ResumeYourWorkContent/>
      <ResumeYourWorkContent/>
    </>
  );
}

export default ResumeYourWork;