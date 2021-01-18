import React, { useReducer, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginComp from "../components/Login/LoginComp";
import Dashboard from "../components/publicView/Dashboard";
import Menu from "../components/AdminLte/Menu";

/* context => data dan fungsin jadi lebih global */
export const AuthContext = createContext();

/* initial state */
const initialState = {
  loggedIn: localStorage.getItem("token"),
  username: localStorage.getItem("username"),
  // accessToken: null,
  // tokenExpires:0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("username", JSON.stringify(action.payload.username));
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      localStorage.setItem("expires", JSON.stringify(action.payload.expiresIn));
      return {
        ...state,
        loggedIn: localStorage.getItem("token"),
        username: localStorage.getItem("username"),
        // token: action.payload.accessToken,
        // tokenExpires: action.payload.expiresIn
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        loggedIn : localStorage.getItem(''), //hilanng lagi
      };

    default:
      return state;
  }
};

export default function App(props) {
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
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/login" component={LoginComp} />
          <Route exact path="/admin" component={Menu} />
        </AuthContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
