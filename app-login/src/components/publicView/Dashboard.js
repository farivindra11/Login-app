import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css";


export default function Dashboard() {
  return (
    <Fragment>
        <div className="">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <NavLink to='/' className="navbar-brand">
                SISKAPERBAPO
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown active">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >
                      Update Harga
                    </a>
                    <div
                      className="dropdown-menu pd-10"
                      aria-labelledby="navbarDropdown"
                      >
                      <a className="dropdown-item" href="#">
                        Per Komoditas
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Per Area(Pasar)
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown active">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >
                      Produsen
                    </a>
                    <div
                      className="dropdown-menu pd-10"
                      aria-labelledby="navbarDropdown"
                      >
                      <a className="dropdown-item" href="#">
                        Harga Produsen
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown active">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      >
                      Stok
                    </a>
                    <div
                      className="dropdown-menu pd-10"
                      aria-labelledby="navbarDropdown"
                      >
                      <a className="dropdown-item" href="#">
                        Stok
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Jumlah Pedagang <br /> Per Pasar
                      </a>
                    </div>
                  </li>
                  <li className="nav-item active">
                    <NavLink to='/statistik' className="nav-link">
                      Statistik
                    </NavLink>
                  </li>
                </ul>
                <Link className="nav-item active" to="/login">
                  <p className="loginbut">Login</p>
                </Link>
              </div>
            </div>
          </nav>
        </div>
    </Fragment>
  );
}
