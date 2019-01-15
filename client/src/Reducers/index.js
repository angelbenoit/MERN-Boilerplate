import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import userData from './userData';

export default combineReducers({
  auth,
  userData,
  form: formReducer
});