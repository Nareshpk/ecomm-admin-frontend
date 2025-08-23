import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../constants/signupConstants";
import axios from "axios";

// Set Axios base URL
axios.defaults.baseURL = "http://localhost:5000";

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = (userData: any) => ({
  type: SIGNUP_SUCCESS,
  payload: userData,
});

export const signupFailure = (error: any) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (formData: any) => async (dispatch: any) => {
  try {
    console.log("Signup form data:", formData);
    const response = await axios.post(
      "http://localhost:8080/api/auth/signup",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Only if you use cookies
      }
    );

    dispatch({ type: "SIGNUP_SUCCESS", payload: response.data });
  } catch (error: any) {
    console.error("Signup error:", error);
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error?.response?.data?.message || "Signup failed",
    });
  }
};
