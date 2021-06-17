import { combineReducers } from 'redux';

import users, {IUsersReducer} from './usersReducers';
import posts, {IPostReducer} from './postsReducers';
import photos, {IPhotoReducer} from './photosReducers';

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
    photos: IPhotoReducer;
}

export default combineReducers({
    users,
    posts,
    photos,
})