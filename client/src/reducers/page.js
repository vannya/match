import { SET_CURRENT_MEME } from '../actions/types';

const initialState = {
  currentMeme: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MEME:
      return { ...state, currentMeme: action.payload };
    default:
      return state;
  }
}
