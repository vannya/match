import axios from "axios";
import { FETCH_USER, FETCH_MEMES } from "./types";

// Fetches Current User
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentUser");

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Logs in a demo User
export const loginDemo = () => async dispatch => {
  const user = {
    username: "testUser",
    password: "xxxx"
  };

  const res = await axios.post("/api/testUser", user);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Adds Image
export const addMeme = newMeme => async dispatch => {
  const res = await axios.post("/api/newMeme", newMeme);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Deletes Image
export const deleteMeme = imageId => async dispatch => {
  const res = await axios.delete(`/api/memes/del/${imageId}`, imageId);

  dispatch({ type: FETCH_USER, payload: res.data });
};

// Fetches all Images
export const fetchMemes = () => async dispatch => {
  const res = await axios.get("/api/memes");

  dispatch({ type: FETCH_MEMES, payload: res.data });
};
