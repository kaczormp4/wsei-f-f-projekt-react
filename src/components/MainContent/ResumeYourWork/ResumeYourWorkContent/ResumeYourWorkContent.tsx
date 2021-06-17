import styled from "styled-components";
import Ic from '../../../icons/I';

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
  display:flex;
  align-items: center;
  img{
    margin:0;
  }
  span{
    color:grey;
    margin:5px;
    padding-bottom:5px;
  }
`;

function ResumeYourWorkContent(props: any) {
  return (
    <>
      <ResumeYWCBoxContent>
        <ResumeYWCTop>{props.title}</ResumeYWCTop>
        <ResumeYWCCenter>{props.content}</ResumeYWCCenter>
        <ResumeYWCBottom>
            <ResumeYWCBottomBox>
                <Ic iconName='logout.svg'/> <span>YooHoo.corp </span>
            </ResumeYWCBottomBox>
            <ResumeYWCBottomBox>
                <Ic iconName='bell.svg'/> <span>Client Contact</span>
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
