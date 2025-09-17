import  Axios  from "axios";
import { ADD_CATOGRY_FAILURE, ADD_CATOGRY_REQUEST, ADD_CATOGRY_SUCCESS } from "../constants/categoryConstants";

export const addCategoryAction = (catdata: any) => {
  return async (dispatch: any) => {
    dispatch({type:ADD_CATOGRY_REQUEST});
    try {
      const response = await Axios.post(
        "http://localhost:8080/api/categories/create",
        catdata
      );
     
      return dispatch({type:ADD_CATOGRY_SUCCESS, payload:response.data});
    } catch (error: any) {
      dispatch({type:ADD_CATOGRY_FAILURE, error:error.response.data});
    }
  };
};