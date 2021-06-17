import { ISinglePhoto} from '../entities/ISinglePhoto';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotoReducer {
    photoList: ISinglePhoto[];
}

const defaultState = () : IPhotoReducer => ({
    photoList: [],
});

export default (state = defaultState(), action : any)=>{
    switch(action.type){
        case actionTypes.GET_PHOTO:{
            const photoData:actionTypes.IPhotoTypes['GET_PHOTO'] = action;
            return{
                ...state,
                photoList:photoData.photoList
            }
        }
        default:{
            return  state;
        }
    }
}