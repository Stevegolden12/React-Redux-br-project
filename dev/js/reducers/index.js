import { combineReducers } from 'redux';
import UserReducer from "./reducer-users";

const allReducers = combineReducers({
  /* MUST use users to identify in store*/
  users: UserReducer
});