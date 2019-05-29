import { SET_CURRENT_MEME, TOGGLE_MODAL } from '../actions/types';

const initialState = {
  currentMeme: null,
  modalType: null,
  memeToEdit: null,
  modalShowing: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalType: action.payload.type,
        memeToEdit: action.payload.meme,
        modalShowing: !state.modalShowing
      };
    case SET_CURRENT_MEME:
      return { ...state, currentMeme: action.payload };
    default:
      return state;
  }
}
