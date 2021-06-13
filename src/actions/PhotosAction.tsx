import { Dispatch } from 'redux';

interface IPhoto {
    photo: string | undefined;
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}
// interface IPhotoTypes {
//     GET_PHOTO: {
//         photoList: IPhoto[];
//     };
// }
const GET_PHOTO = 'GET_PHOTO';

export const getPhoto = (): Promise<IPhoto[]> => ((dispatch: Dispatch) => {

    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photoList: IPhoto[]) => {
            dispatch({
                type: GET_PHOTO,
                photoList
            })
            console.log(photoList)
        })
}) as any;
