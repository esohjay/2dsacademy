import axios from "axios";

import {
  ADD_CLASS_FAIL,
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
} from "../../constants/admin";

// import { useStudentContext } from "../contexts/student";
import { useAdminContext } from "../../contexts/admin";

export const useClassActions = () => {
  const { dispatch } = useAdminContext();
  const addClass = async (info, reset) => {
    dispatch({ type: ADD_CLASS_REQUEST });
    try {
      const { data } = await axios.post("/api/admin/class", info);
      reset();
      dispatch({ type: ADD_CLASS_SUCCESS, payload: data });
      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ADD_CLASS_FAIL, payload: message });
    }
  };

  return { addClass };
};
