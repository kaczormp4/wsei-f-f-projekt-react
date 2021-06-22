import React from 'react'
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { IUsersReducer } from '../../reducers/usersReducers';
import { IState } from '../../reducers';
import { useSelector } from 'react-redux';
import Ic from '../icons/I';
const UserContentContainer = styled.div`
    width: calc(100% - 400px);
`;
const TopNav = styled.div`
    background-color:white;
    width: 90%;
    height: 70px;
    display:flex;
    justify-content: flex-end;
    img {
        width:20px;
    }
    div{
        display: flex;
        align-items:center;
    }
`;
const UserInfo = styled.div`
    background-color:white;
    width: 90%;
    height:300px;
    display:flex;
    box-sizing: border-box;
    padding-right:50px;
`;
const PhotoBox = styled.div`
    width: auto;
    height:300px;
`;
const UserPhoto = styled.div`
    width: 150px;
    height: 150px;
    background-color:#2b352a;
    border-radius: 100px;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 20px;

`;

const MainInfo = styled.div`
    width: calc(100% - 200px);
    height:300px;
    display:flex;
    justify-content: space-between;
    div {
        margin-top:50px;
    }
`;
const About = styled.div`
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    background-color:white;
    width: 90%;
    height: 500px;
    text-align: left;
    box-sizing: border-box;
    padding: 50px;
    span { 
        padding: 10px;
        background-color: #e6f0f3;
        margin-right: 20px;
    }
`;
const PanelInformation = styled.div`
    width: 90%;
    background-color:white;
    text-align:left;
    box-sizing: border-box;
    padding-top: 40px;
    padding: 50px;
    border-bottom: 1px solid lightgrey;
    h1 {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    p {
        color:grey;
    }
    div {
        display: flex;
        background-color: #e6f0f3;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        b {
            margin-right: 5px;
            margin-left: 5px; 
        }
        span {
            margin-right: 15px; 
            margin-left: 15px; 
        }
    }
`;
const Proposals = styled.div`
    width: 90%;
    background-color:white;
    text-align:left;
    box-sizing: border-box;
    padding-top: 40px;
    padding: 50px;
    border-bottom: 1px solid lightgrey;

    h1 {
        margin: 0;
    }
    table {
        width: 100%;
    }
    div {
        color: #86e3ff;
        width: 100%;
        text-align: right;
        padding-top: 40px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
const InternalRewiews = styled.div`
    width: 90%;
    background-color:white;
    text-align:left;
    box-sizing: border-box;
    padding-top: 40px;
    padding: 50px;
    border-bottom: 1px solid lightgrey;

    h1 {
        margin: 0;
    }
    table {
        width: 100%;
    }
    div {
        color: #86e3ff;
        width: 100%;
        text-align: right;
        padding-top: 40px;
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
const AmountOfFes = styled.div`
    width: 90%;
    background-color:white;
    text-align:left;
    box-sizing: border-box;
    padding-top: 40px;
    padding: 50px;
    border-bottom: 1px solid lightgrey;

    h1 {
        margin: 0;
    }
    table {
        width: 100%;
    }

`;
function UserContent(){
    const { usersList } = useSelector<IState, IUsersReducer>(state => ({
        ...state.users
      }))
    return (
        <UserContentContainer>
            <TopNav>
                <div><Ic iconName='email.svg'/> <span>MESSAGE</span></div>
                <div><Ic iconName='document.svg'/><span>REATE A REQUESTC</span></div>
                <div><Ic iconName='add (1).svg'/><span> ADD A CLUSTER</span></div>
                <div><Ic iconName='close.svg'/><span></span></div>
            </TopNav>
            <UserInfo>
                <PhotoBox>
                    <UserPhoto></UserPhoto>
                    <span>See Profile</span>
                </PhotoBox>
                <MainInfo>
                    <div>
                        <p>{usersList[0].name}</p>
                        <p>{usersList[0].company.name}</p>
                        <p>{usersList[0].address.city}</p>
                    </div>
                    <div>
                    {usersList[0].email}
                    <br/>
                    {usersList[0].phone}
                    </div>
                </MainInfo>
            </UserInfo>
            <About>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
                <span>Merges and acquisition</span>
                <h1>Expertise</h1>
                <span>Merges and acquisition</span>
            </About>
            <PanelInformation>
                <h1>Panel information</h1>
                <p>Hourly free</p>
                <span>610E/hour (negociated)</span>
                <p>Terms and Conditions</p>
                <span>Monthy 10kE Retainer - see with Jeanny Smith</span>
                <div>ICO Attachment Lorem ipsum</div>
                <h1>Service and projects</h1>
                <p>Corporate M and A and international acquisitions</p>
                <h1>Internal correspondants</h1>
                <div>
                    [PHOTO] <b>First Name </b> <b>Last Name </b><span>[IMG] Message</span><span>[IMG] Profile</span>
                </div>
                <div>
                    [PHOTO] <b>First Name </b> <b>Last Name </b><span>[IMG] Message</span><span>[IMG] Profile</span>
                </div>
            </PanelInformation>      
            <Proposals>
                <h1>Proposals</h1>
                <table>
                    <tr>
                        <td><h2>Name</h2></td>
                        <td><h2>Entity</h2></td>
                        <td><h2>Location</h2></td>
                        <td><h2>Expertise</h2></td>
                        <td><h2>Date</h2></td>
                        <td><h2>Firm</h2></td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                </table>
                <div> SEE MORE PROPOSALS</div>
            </Proposals>      
            <InternalRewiews>
                <h1>Internal Reviews</h1>
                <table>
                    <tr>
                        <td><h2>Name</h2></td>
                        <td><h2>Entity</h2></td>
                        <td><h2>Location</h2></td>
                        <td><h2>Expertise</h2></td>
                        <td><h2>Date</h2></td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                </table>
                <div> SEE MORE REWIEWS</div>
            </InternalRewiews>   
            <AmountOfFes>
            <h1>Internal Reviews</h1>
                <table>
                    <tr>
                        <td><h2>Year</h2></td>
                        <td><h2>CostCenter</h2></td>
                        <td><h2>Total Amount</h2></td>
                        <td><h2>Law Firm</h2></td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                    <tr>
                        <td>Lorem </td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                        <td>Lorem</td>
                    </tr>
                </table>
            </AmountOfFes> 
        </UserContentContainer>
    )
}

export default UserContent
