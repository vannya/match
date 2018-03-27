import axios from "axios";
import { FETCH_USER, FETCH_MEMES, FETCH_TAGS, SET_CURRENT_MEME, UPDATE_USER } from "./types";

// Fetches Current User
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentUser");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Update User
export const updateUser = (updatedUser) => async dispatch => {
  const res = await axios.put("/api/currentUser", updatedUser);

  dispatch({ type: UPDATE_USER, payload: res.data })
}

// Adds Meme
export const addMeme = newMeme => async dispatch => {
  const res = await axios.post("/api/newMeme", newMeme);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Deletes Meme
export const deleteMeme = imageId => async dispatch => {
  const res = await axios.delete(`/api/memes/del/${imageId}`, imageId);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches all Memes
export const fetchMemes = () => async dispatch => {
  const res = await axios.get("/api/memes");

  dispatch({ type: FETCH_MEMES, payload: res.data });
};

// Fetches list of all distinct tags
export const fetchTags = () => async dispatch => {
  const res = await axios.get("/api/tags");

  dispatch({ type: FETCH_TAGS, payload: res.data });
}

// Searches for memes based on tags
export const searchTag = (tag) => async dispatch => {
  const res = await axios.get(`/api/tags/${tag}`);

  dispatch({ type: FETCH_MEMES, payload: res.data});
}

// Sets the current meme
export const setCurrentMeme = (meme) => async dispatch => {

  dispatch({type: SET_CURRENT_MEME, payload: meme});
}


// // Logs in a demo User
// // Retaining this code for future use.
// export const loginDemo = () => async dispatch => {
//   const user = {
//     username: "testUser",
//     password: "xxxx"
//   };

//   const res = await axios.post("/api/testUser", user);

//   dispatch({ type: FETCH_USER, payload: res.data });
// };