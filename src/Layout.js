import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./images/smallLogo.png";
import "./styles/css/styles.css";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <div className="container-fluid p-0 d-flex flex-column">
        {/* ===nav區=== */}
        <div className="theNav row p-0 m-0 d-flex align-items-center shadow position-sticky top-0">
          {/* 左邊logo */}
          <div className="col-12 col-md-6 px-1 px-md-3 py-1 logo">
            <Link to="/about">
              <img src={logo} alt="logo" style={{ maxHeight: "40px" }} />
            </Link>
          </div>
          {/* 右邊router與button */}
          <div className="col-12 col-md-6 px-1 px-md-3 py-1 d-flex">
            {/* router */}
            <div className="d-flex col-12 justify-content-end">
              <ul className="d-flex mb-0 align-items-center">
                <li className="list-unstyled">
                  <Link
                    className="text-decoration-none px-2 fw-bolder"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    className="text-decoration-none px-2 fw-bolder"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="list-unstyled">
                  <Link
                    className="text-decoration-none px-2 fw-bolder"
                    to="/location"
                  >
                    Location
                  </Link>
                </li>
              </ul>
              {/* router */}
              <button className="btn btn-primary ms-3">
                <Link
                  className="text-decoration-none px-1 text-light"
                  to="/profile"
                >
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* ===各page區=== */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
