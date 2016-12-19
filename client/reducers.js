/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import sign from './modules/singup/SingupReducer';
import login from './modules/login/loginReducer';
import Email from './modules/Email-notifications/EmailReducer';


// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  sign,
  login,
  Email,
});
