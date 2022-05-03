import React, { useContext, useReducer, createContext } from "react";
import Cookies from "js-cookie";
import { studentReducer } from "../reducers/student";

const StudentContext = createContext();

const initialState = {
  loading: false,
  studentData: Cookies.get("studentData")
    ? JSON.parse(Cookies.get("studentData"))
    : null,
  messageSent: false,
  enrolled: false,
  error: false,
};
const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <StudentContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  return useContext(StudentContext);
};

export { StudentContext, StudentProvider };
