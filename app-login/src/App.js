import React, { useReducer, createContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginComp from "./components/LoginComp";
import HomeComp from "./components/HomeComp";

/* context => data dan fungsin jadi lebih global */
export const AuthContext = createContext();

/* initial state */
const initialState = {
  isAuthentication: false,
  username: null,
  accessToken: null,
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
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthentication: false,
        username: action.payload.username,
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
                pathname: "/homepage",
              }}
            />
          )}
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/homepage" component={HomeComp} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
