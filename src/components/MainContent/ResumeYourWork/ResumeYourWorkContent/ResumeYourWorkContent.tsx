import styled from "styled-components";
// import Ic from "../../icons/I";

const ResumeYWCBoxContent = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
  box-shadow: 0 0 5px 1px #dfdfdf;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 10px;
`;

const ResumeYWCTop = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 25%;
  text-align: left;
  color: rgb(68, 87, 169);
  font-size: 1.2em;
  font-weight: 600;
`;
const ResumeYWCCenter = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 50%;
  text-align: left;
`;
const ResumeYWCBottom = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 25%;
  text-align: left;
  display: flex;
`;

const ResumeYWCBottomBox = styled.div`
  box-sizing: border-box;
  width: auto;
  margin-right: 10px;
  span{
    color:grey;
  }
`;

function ResumeYourWorkContent() {
  return (
    <>
      <ResumeYWCBoxContent>
        <ResumeYWCTop>Contract </ResumeYWCTop>
        <ResumeYWCCenter>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            uis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, 
        </ResumeYWCCenter>
        <ResumeYWCBottom>
            <ResumeYWCBottomBox>
                [ ico ] TEXT
            </ResumeYWCBottomBox>
            <ResumeYWCBottomBox>
                [ ico ] Client Contact
            </ResumeYWCBottomBox>
            <ResumeYWCBottomBox>
              <span>Updates 3 days ago by John Lock</span>  
            </ResumeYWCBottomBox>
        </ResumeYWCBottom>
      </ResumeYWCBoxContent>
    </>
  );
}

export default ResumeYourWorkContent;
