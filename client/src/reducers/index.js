import { combineReducers } from "redux";
import oauthReducer from "./oauthReducer";
import memeReducer from "./memeReducer";
import tagsReducer from "./tagsReducer";

export default combineReducers({
  oauth: oauthReducer,
  memes: memeReducer,
  tags: tagsReducer
});
