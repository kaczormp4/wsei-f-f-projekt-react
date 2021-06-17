import { Dispatch } from 'redux';
import * as actionsTypes from '../actions/actionTypes/postTypes';
import { ISinglePost } from '../entities/ISinglePost';

export const getPosts = () : Promise<ISinglePost[]> => ((dispatch:Dispatch) =>{

        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((postList : ISinglePost[]) => {
            console.log(postList)
            dispatch({
                type:actionsTypes.GET_POST,
                postList
            })
        })
}) as any;