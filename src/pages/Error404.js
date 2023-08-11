import React from "react";
import imgPage404 from "../images/pageNotFound.jpg";

const Error404 = () => {
  return (
    <div className="mainArea container-fluid d-flex justify-content-center align-items-center p-3 text-center text-danger">
      <div className="row p-0 m-0 overflow-hidden justify-content-center">
        <img
          className="col-11 col-md-7 p-0"
          src={imgPage404}
          alt="page not found"
        />
        <p className="fs-3 fw-bolder">404 Page Not Found!!</p>
      </div>
    </div>
  );
};

export default Error404;
