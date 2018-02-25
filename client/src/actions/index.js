import axios from "axios";
import { FETCH_USER, FETCH_MEMES } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/currentUser");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loginDemo = () => async dispatch => {
  const user = {
    username: "testUser",
    password: "xxxx"
  };

  const res = await axios.post("/api/testUser", user);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addMeme = (link) => async dispatch => {
    const res = await axios.post("/api/newMeme", link);

    dispatch({ type: FETCH_USER, payload: res.data});
}

export const fetchMemes = () => async dispatch => {
    const res = await axios.get("/api/memes");

    dispatch({ type: FETCH_MEMES, payload: res.data});
}