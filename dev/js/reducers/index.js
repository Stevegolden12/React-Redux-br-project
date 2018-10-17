import { combineReducers } from 'redux';
import UserReducer from "./reducer-users";
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  /* MUST use users to identify in store*/
  users: UserReducer
  activeUser: ActiveUserReducer
});

export default allReducers;