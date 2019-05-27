import { SET_CURRENT_MEME } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_MEME:
      return action.payload || false;
    default:
      return state;
  }
}