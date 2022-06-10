import axios from "axios";
import Cookies from "js-cookie";
import emailjs from "@emailjs/browser";
import { welcomeMessage, contactMsg } from "../../../utils/emailTemplate";

import {
  ENROLL_STUDENT_FAIL,
  ENROLL_STUDENT_REQUEST,
  ENROLL_STUDENT_SUCCESS,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../constants/user";

import { useUserContext } from "../contexts/user";

export const useUserActions = () => {
  const { dispatch } = useUserContext();
  const enrollStudent = async (info, reset, close) => {
    dispatch({ type: ENROLL_STUDENT_REQUEST });
    try {
      const { data } = await axios.post("/api/user/enroll", info);
      reset();
      dispatch({ type: ENROLL_STUDENT_SUCCESS, payload: data });
      Cookies.set("userData", JSON.stringify(data));
      const output = welcomeMessage(data.fname, data.regNo);
      close();
      emailjs
        .send(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          { output, receiver: data.email },
          process.env.NEXT_PUBLIC_EMAIL_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: ENROLL_STUDENT_FAIL, payload: message });
    }
  };
  const loginUser = async (info, reset, close) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post("/api/user/login", info);
      reset();
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      Cookies.set("userData", JSON.stringify(data));
      close();

      //   router.push(redirect || "/");
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({ type: LOGIN_FAIL, payload: message });
    }
  };
  const contactUs = async (info, reset) => {
    dispatch({ type: CONTACT_US_REQUEST });
    const output = contactMsg(info.name, info.phone, info.email, info.message);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_2,
        { output, senderAddress: info.email, sender: info.name },
        process.env.NEXT_PUBLIC_EMAIL_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          dispatch({ type: CONTACT_US_SUCCESS });
        },
        (error) => {
          console.log(error.text);
          dispatch({ type: CONTACT_US_FAIL, payload: error.text });
        }
      );

    reset();
    // try {
    //   const { data } = await axios.post("/api/contact", info);
    //   dispatch({ type: CONTACT_US_SUCCESS, payload: data });
    // } catch (error) {
    //   const message =
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message;

    //   dispatch({ type: CONTACT_US_FAIL, payload: message });
    // }
  };
  const logout = async () => {
    Cookies.remove("userData");
    dispatch({ type: LOGOUT_SUCCESS });
  };
  return { enrollStudent, contactUs, loginUser, logout };
};
