import axios from "axios";
import Cookies from "js-cookie";

import {
  ENROLL_STUDENT_FAIL,
  ENROLL_STUDENT_REQUEST,
  ENROLL_STUDENT_SUCCESS,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
} from "../constants/student";

import { useStudentContext } from "../contexts/student";

export const useStudentActions = () => {
  const { dispatch } = useStudentContext();
  const enrollStudent = async (info, reset, close) => {
    dispatch({ type: ENROLL_STUDENT_REQUEST });
    try {
      const { data } = await axios.post("/api/enroll", info);
      reset();
      dispatch({ type: ENROLL_STUDENT_SUCCESS, payload: data });
      Cookies.set("studentData", JSON.stringify(data));
      close();
      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ENROLL_STUDENT_FAIL, payload: message });
    }
  };
  const contactUs = async (info, reset) => {
    dispatch({ type: CONTACT_US_REQUEST });
    try {
      const { data } = await axios.post("/api/contact", info);
      reset();
      dispatch({ type: CONTACT_US_SUCCESS, payload: data });
      Cookies.set("studentData", JSON.stringify(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: CONTACT_US_FAIL, payload: message });
    }
  };
  return { enrollStudent, contactUs };
};
