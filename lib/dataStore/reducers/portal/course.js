import {
  ADD_PROGRAM_FAIL,
  ADD_PROGRAM_REQUEST,
  ADD_PROGRAM_SUCCESS,
  ADD_PROGRAM_RESET,
  ADD_CLASS_FAIL,
  ADD_CLASS_REQUEST,
  ADD_CLASS_SUCCESS,
  ADD_CLASS_RESET,
} from "../../constants/portal";

export const courseReducer = (state, action) => {
  switch (action.type) {
    case ADD_PROGRAM_REQUEST:
      return { ...state, loading: true };
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        loading: false,
        programAdded: true,
        program: action.payload,
      };
    case ADD_PROGRAM_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_PROGRAM_RESET:
      return { ...state, programAdded: false };
    case ADD_CLASS_REQUEST:
      return { ...state, loading: true };
    case ADD_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        classAdded: true,
        classData: action.payload,
      };
    case ADD_CLASS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_CLASS_RESET:
      return { ...state, classAdded: false };

    default:
      return state;
  }
};
