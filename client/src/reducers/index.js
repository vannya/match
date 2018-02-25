import { combineReducers } from "redux";
import oauthReducer from "./oauthReducer";
import memeReducer from "./memeReducer";

export default combineReducers({
  oauth: oauthReducer,
  memes: memeReducer
});
