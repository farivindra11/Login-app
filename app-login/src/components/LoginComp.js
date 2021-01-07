import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import "./css/login.css"

const qs = require("querystring");
const api = "http://localhost:3001";

export default function LoginComp() {
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);
  // console.log(data);

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name] : event.target.value,
    });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    const requestBody ={
      email: data.email,
      password: data.password,
    };
    
    const config = {
      headers: {
        "Content-Type": "application/x-www-urlencoded",
      },
    };

    axios({
      method: 'post',
      url: api + '/api/user/login',
      data: qs.stringify(requestBody),
      headers: config
    }).then(res => {
          if (res.data.auth === true) {
            dispatch({
              type: "LOGIN",
              payload: res.data,
            })
          }
          else {
            setData({
              ...data,
              isSubmitting: false,
              errorMessage: res.data.message,
            });
          }
          throw res;
        });
  };

  return (
    <Fragment>
      <>
        <div className="sidenav">
          <div className="login-main-text">
            <h2>
              Application
              <br /> Login Page
            </h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={handleInputChange}
                    name="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={data.password}
                    onChange={handleInputChange}
                    name="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                {data.errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {data.errorMessage}
                  </div>
                )}

                <button
                  disabled={data.isSubmitting}
                  className="btn btn-outline-success"
                >
                  {data.isSubmitting ? "...loading" : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
}
