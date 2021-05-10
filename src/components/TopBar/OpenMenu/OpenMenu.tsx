import React, { useState } from 'react'
import styled, { css } from 'styled-components';
import { isConstructorDeclaration } from 'typescript';
import Ic from '../../icons/I';

const MenuOpen = styled.div<{isHide?: boolean}>`
    width:250px;
    height:auto;
    background-color: white;
    z-index: 999;
    position: absolute;
    border: 3px solid #eeeeee;
    box-sizing:border-box;
    top: 60px;//zrobic zmienna, wartosci ustawione na sztuwno
    transition-duration: 0.4s;
    transition-timing-function: ease-in-out;
    
    ${props => props.isHide 
        ? css`left: -350px;transform: rotate3d(200, 1, 1, 45deg);opacity:0.4`
        : css`left: 0px;`
        }
`;
const ChoosedOption = styled.div`
`;
const Filter = styled.input`
    width:90%;
    height:20px;
`;
const CategoriesBox = styled.div`
     overflow: auto;
     height:500px;
`;
const Categories = styled.div`
    text-align:left;    
    ul{
        list-style-type: none;
        padding-left:10px;
        li{
            display:flex;
            align-items:center;
            cursor:pointer;
            img {
                width:25px;
            }
        }
    }
`;
const LogOut = styled.div`
    background-color:gray;
    display:flex;
    align-items:center;
`;
function OpenMenu(props : {isHide?: boolean}) {
    return (
        <MenuOpen isHide={props.isHide}>
            <ChoosedOption>
                ARLEADY CHOOSED OPTION
            </ChoosedOption>
            <Filter placeholder="Filter..."></Filter>
            <CategoriesBox>
                <Categories>
                    <ul>Platform
                        <li><Ic iconName="house2.svg"/> Home</li>
                        <li><Ic iconName="publications.svg"/> Publications</li>
                        <li><Ic iconName="people.svg"/> People</li>
                        <li><Ic iconName="entities2.svg"/> Entities</li>
                        <li><Ic iconName="administration.svg"/> Administration</li>
                    </ul>
                </Categories>
                <Categories>
                    <ul>Workspaces
                        <li><Ic iconName="house2.svg"/> Client Contract</li>
                        <li><Ic iconName="publications.svg"/> Supplier contract</li>
                        <li><Ic iconName="people.svg"/> Corporate</li>
                        <li><Ic iconName="entities2.svg"/> Group Norms</li>
                        <li><Ic iconName="administration.svg"/> Real estate contracts</li>                      
                    </ul>
                </Categories>
            </CategoriesBox>
            <Categories>
                <ul>Account
                    <li><Ic iconName="ecosystem.svg"/> Client Contract</li>
                    <li><Ic iconName="ecosystem.svg"/> Supplier contract</li>
                    <li><Ic iconName="ecosystem.svg"/> Corporate</li>
                </ul>
            </Categories>
            <LogOut>
                <Ic iconName="ecosystem.svg"/> Logout
            </LogOut>
        </MenuOpen>
    )
}

export default OpenMenu;
