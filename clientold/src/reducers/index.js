import { combineReducers } from "redux";
import oauthReducer from "./oauthReducer";
import memeReducer from "./memeReducer";
import tagsReducer from "./tagsReducer";
import currentMemeReducer from "./currentMemeReducer";

export default combineReducers({
  oauth: oauthReducer,
  memes: memeReducer,
  tags: tagsReducer,
  currentMeme: currentMemeReducer
});
