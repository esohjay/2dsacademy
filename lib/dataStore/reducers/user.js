import {
  ENROLL_STUDENT_FAIL,
  ENROLL_STUDENT_REQUEST,
  ENROLL_STUDENT_SUCCESS,
  ENROLL_STUDENT_RESET,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_RESET,
} from "../constants/user";

export const userReducer = (state, action) => {
  switch (action.type) {
    case ENROLL_STUDENT_REQUEST:
      return { ...state, loading: true };
    case ENROLL_STUDENT_SUCCESS:
      return { ...state, loading: false, enrolled: true };
    case ENROLL_STUDENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ENROLL_STUDENT_RESET:
      return { ...state, enrolled: false };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedin: true,
        userData: action.payload,
      };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_RESET:
      return { ...state, loggedin: false };
    case CONTACT_US_REQUEST:
      return { ...state, loading: true };
    case CONTACT_US_SUCCESS:
      return {
        ...state,
        loading: false,
        messageSent: true,
      };
    case CONTACT_US_RESET:
      return {
        ...state,
        messageSent: false,
      };
    case CONTACT_US_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, loggedout: true, userData: null };
    case LOGOUT_RESET:
      return { ...state, loggedout: false };
    default:
      return state;
  }
};
