import React, { useContext, useReducer, createContext } from "react";
import Cookies from "js-cookie";
import { userReducer } from "../reducers/user";

const UserContext = createContext();
const userData = Cookies.get("userData")
  ? JSON.parse(Cookies.get("userData"))
  : {};
const initialState = {
  loading: false,
  userData,
  messageSent: false,
  enrolled: false,
  loggedin: false,
  loggedout: false,
  error: false,
};
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
