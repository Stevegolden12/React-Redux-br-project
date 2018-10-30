import { combineReducers } from 'redux';
import UserReducer from './reducer-users';
import ActiveUsers from './reducer-active-user'

const allReducers = combineReducers({
  users: UserReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;