import React, { useReducer, createContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginComp from "../components/Login/LoginComp";
import Menu from "../components/AdminLte/Menu";
import Dashboard from "../components/publicView/Dashboard";
import Coba from "../components/Coba";

/* context => data dan fungsin jadi lebih global */
export const AuthContext = createContext();

/* initial state */
const initialState = {
  isAuthentication: false,
  username: null,
  accessToken: null,
  tokenExpires:0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("username", JSON.stringify(action.payload.username));
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      return {
        ...state,
        isAuthentication: true,
        username: action.payload.username,
        token: action.payload.accessToken,
        tokenExpires: action.payload.expiresIn
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthentication: false,
      };

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>

        {/*==== Route AdminLTE ==== */}
        <Route exact path="/update-harga">
          <Coba />
        </Route>
        {/* ================ */}
        <AuthContext.Provider
          value={{
            state,
            dispatch,
          }}
        >
          {!state.isAuthentication ? (
            <Redirect to={{ pathname: "/login" }} />
          ) : (
            <Redirect
              to={{
                pathname: "/admin",
              }}
            />
          )}
          <Route path="/login">
            <LoginComp />
          </Route>
          <Route exact path="/admin" component={Menu} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
