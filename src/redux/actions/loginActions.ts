import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../constants/loginConstants";
import local from "../../utils/local";
import { jwtDecode } from "jwt-decode"; // Corrected import

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userData: any) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error: any) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginAction = (credentials: any) => {
  return async (dispatch: any) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        credentials
      );

      // Save token and user data to localStorage
      const { token, user } = response.data;
      localStorage.setItem("bearerToken", JSON.stringify(token));
      const decodedToken = jwtDecode(token); // Decode the token
      localStorage.setItem(
        "auth",
        JSON.stringify({ isAuthenticated: true, user: decodedToken })
      );
      return dispatch(loginSuccess(response.data));
    } catch (error: any) {
      dispatch(loginFailure(error.response.data));
    }
  };
};
