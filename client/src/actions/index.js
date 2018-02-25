import axios from "axios";
import { FETCH_USER } from "./types";

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

    dispatch({ type: FETCH_USER, payload: res.data});
}
