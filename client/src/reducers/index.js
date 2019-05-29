import { combineReducers } from 'redux';
import authReducer from './auth';
import memeReducer from './memes';
import tagsReducer from './tags';
import pageReducer from './page';

export default combineReducers({
  auth: authReducer,
  memes: memeReducer,
  page: pageReducer,
  tags: tagsReducer
});
