import axios from "axios";

import {
  ADD_CLASS_FAIL,
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  FIND_CLASS_FAIL,
  FIND_CLASS_REQUEST,
  FIND_CLASS_SUCCESS,
} from "../../constants/portal";

// import { useStudentContext } from "../contexts/student";
import { useCourseContext } from "../../contexts/course";

export const useClassActions = () => {
  const { dispatch } = useCourseContext();
  const addClass = async (info, reset) => {
    dispatch({ type: ADD_CLASS_REQUEST });
    try {
      const { data } = await axios.post("/api/admin/class", info);
      reset();
      dispatch({ type: ADD_CLASS_SUCCESS, payload: data });
      return data;
      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ADD_CLASS_FAIL, payload: message });
    }
  };
  const findClassById = async (id) => {
    dispatch({ type: FIND_CLASS_REQUEST });
    try {
      const { data } = await axios.get(`/api/admin/class/${id}`);

      dispatch({ type: FIND_CLASS_SUCCESS, payload: data });
      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: FIND_CLASS_FAIL, payload: message });
    }
  };

  return { addClass, findClassById };
};
