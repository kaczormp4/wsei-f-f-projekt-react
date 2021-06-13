import { Dispatch } from 'redux';
import * as actionTypes from '../actions/actionTypes/userTypes';
import { ISingleUser } from '../entities/users';

// interface IPhoto {
//     photo: string | undefined;
//     albumId: number,
//     id: number,
//     thumbnailUrl: string,
//     title: string,
//     url: string
// }
// interface IPhotoTypes {
//     GET_PHOTO: {
//         photoList: IPhoto[];
//     };
// }
// const GET_PHOTO = 'GET_PHOTO';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser[]) => {
            dispatch({
                type: actionTypes.GET_USERS,
                usersList
            })
        })
        .catch(err => console.log(err))
    }) as any;
