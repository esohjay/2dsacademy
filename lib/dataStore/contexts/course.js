import React, { useContext, useReducer, createContext } from "react";
// import Cookies from "js-cookie";
import { courseReducer } from "../reducers/portal/course";

const CourseContext = createContext();

const initialState = {
  loading: false,
  program: {},
  programAdded: false,
  classData: {},
  classAdded: false,
  error: false,
};
const CourseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  return (
    <CourseContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  return useContext(CourseContext);
};

export { CourseContext, CourseProvider };
