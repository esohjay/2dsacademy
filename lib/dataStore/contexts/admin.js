import React, { useContext, useReducer, createContext } from "react";
// import Cookies from "js-cookie";
import { adminReducer } from "../reducers/admin/program";

const AdminContext = createContext();

const initialState = {
  loading: false,
  program: {},
  programAdded: false,
  class: {},
  classAdded: false,
  error: false,
};
const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adminReducer, initialState);

  return (
    <AdminContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => {
  return useContext(AdminContext);
};

export { AdminContext, AdminProvider };
