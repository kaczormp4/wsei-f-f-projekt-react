import { combineReducers } from 'redux';

import users, {IUsersReducer} from './usersReducers';
import posts, {IPostReducer} from './postsReducers';

export interface IState {
    users: IUsersReducer;
    posts: IPostReducer;
}

export default combineReducers({
    users,
    posts,
})