import { combineReducers } from 'redux';

import users, {IUsersReducer} from './usersReducers';

export interface IState {
    users: IUsersReducer;
}

export default combineReducers({
    users
})