import {
  ENROLL_STUDENT_FAIL,
  ENROLL_STUDENT_REQUEST,
  ENROLL_STUDENT_SUCCESS,
  ENROLL_STUDENT_RESET,
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAIL,
  CONTACT_US_RESET,
} from "../constants/student";

export const studentReducer = (state, action) => {
  switch (action.type) {
    case ENROLL_STUDENT_REQUEST:
      return { ...state, loading: true };
    case ENROLL_STUDENT_SUCCESS:
      return { ...state, loading: false, enrolled: true };
    case ENROLL_STUDENT_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ENROLL_STUDENT_RESET:
      return { ...state, enrolled: false };
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

    default:
      return state;
  }
};
