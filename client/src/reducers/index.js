import { combineReducers } from 'redux';
import authReducer from './auth';
import memeReducer from './memes';
import tagsReducer from './tags';
import currentMemeReducer from './currentMemeReducer';

export default combineReducers({
  auth: authReducer,
  memes: memeReducer,
  tags: tagsReducer,
  currentMeme: currentMemeReducer
});
