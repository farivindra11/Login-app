import React, { Fragment, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../../Router/App";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

export default function Menu() {
  const { state, dispatch } = useContext(AuthContext);

  const timeOut = () => {
    const data = localStorage.getItem("expires");
    setTimeout(() => {
      console.log("token telah berakhir");
      dispatch({
        type: "LOGOUT",
      });
    }, JSON.parse(data));
  };

  useEffect(() => {
    timeOut();
    // eslint-disable-next-line
  }, []);

  // const loggedIn = localStorage.getItem("");
  if (!state.loggedIn) {
    return <Redirect to="/login" />;
  }


  return (
    <Fragment>
      <Header />
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="#" className="brand-link">
          <img
            src="dist/img/magetan.png"
            alt="Siskaperbapo"
            className="brand-image img-circle elevation-3"
            // style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">SISKAPERBAPO</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link to="#" className="d-block">
                Hello, <b>{JSON.parse(state.username)}</b>
              </Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>Dashboard</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/update-harga" className="nav-link">
                  <i className="nav-icon fas fa-money-check-alt" />
                  <p>Update Harga</p>
                </Link>
              </li>

              <li className="nav-header">Data Master</li>
              <li className="nav-item">
                <Link to="/data-bahan-pokok" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Bahan Pokok</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-pasar" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Pasar</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-kategori" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Kategori</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/data-satuan" className="nav-link">
                  <i className="nav-icon fas fa-database" />
                  <p>Data Satuan</p>
                </Link>
              </li>

              <li className="nav-header">Akun</li>
              <li className="nav-item">
                <Link to="/data-pengguna" className="nav-link">
                  <i className="nav-icon fas fa-id-card" />
                  <p>Data Pengguna</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pengaturan-akun" className="nav-link">
                  <i className="nav-icon fas fa-user-cog" />
                  <p>Pengaturan Akun</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/#"
                  className="nav-link"
                  onClick={() =>
                    dispatch({
                      type: "LOGOUT",
                    })
                  }
                >
                  <i className="nav-icon fas fa-sign-out-alt" />
                  <p>Keluar</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

      <Content />
      <Footer />
    </Fragment>
  );
}
