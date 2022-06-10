import axios from "axios";
import Cookies from "js-cookie";

import {
  ADD_PROGRAM_FAIL,
  ADD_PROGRAM_REQUEST,
  ADD_PROGRAM_SUCCESS,
} from "../../constants/portal";

// import { useStudentContext } from "../contexts/student";
import { useCourseContext } from "../../contexts/course";

export const useProgramActions = () => {
  const { dispatch } = useCourseContext();
  const addProgram = async (info, reset) => {
    dispatch({ type: ADD_PROGRAM_REQUEST });
    try {
      const { data } = await axios.post("/api/admin/program", info);
      reset();
      dispatch({ type: ADD_PROGRAM_SUCCESS, payload: data });
      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ADD_PROGRAM_FAIL, payload: message });
    }
  };

  return { addProgram };
};
