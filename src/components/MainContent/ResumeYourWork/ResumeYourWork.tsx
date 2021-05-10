import styled from 'styled-components';
import Ic from '../../icons/I';

const ResumeYWCFilterBar = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        div{
            align-items: center;
        }
    }
`;
const ResumeYWCBoxContent = styled.div`
    width: 100%;
    height: 100px;
    background-color:white;
    box-shadow: 0 0 5px 1px #dfdfdf;
    margin-top:20px;
`;
const InputBox = styled.div`
    box-sizing: border-box;
    border: 1px solid black;
    margin-right: 25px;
    input{
        border: none;
        outline:none;
        font-size: 1em;
    }
`;

function ResumeYourWork() {
    return (
        <>
            <ResumeYWCFilterBar>
                <span>RESUME YOUR WORK</span>
                <div> 
                    <InputBox><input></input>&nbsp; Q &nbsp;</InputBox>
                    <div><Ic iconName="house.svg"/>FOLLOWED <Ic iconName="house.svg"/></div>
                </div>
            </ResumeYWCFilterBar>
        
            <ResumeYWCBoxContent>
            i
            </ResumeYWCBoxContent>

            <ResumeYWCBoxContent>
            i
            </ResumeYWCBoxContent>

            <ResumeYWCBoxContent>
            i
            </ResumeYWCBoxContent>

            <ResumeYWCBoxContent>
            i
            </ResumeYWCBoxContent>
        </>
    )
}

export default ResumeYourWork
