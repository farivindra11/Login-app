import React, { Fragment } from "react";
import { Link} from "react-router-dom";

export default function HomeComp() {
  return (
    <Fragment>
      <h1>Coba nested router</h1>
      <Link className="nav-item active" to="/Coba">
        <p className="loginbut">Coba weh</p>
      </Link>
    </Fragment>
  );
}
