import * as actionTypes from "../constants/Constants";
import axios from "axios";

const url = "http://localhost:8000";

export const getItemData = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/getData`);
    await dispatch({
      type: actionTypes.ADD_DATA,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_DATA_ERROR,
      payload: error.response,
    });
  }
};