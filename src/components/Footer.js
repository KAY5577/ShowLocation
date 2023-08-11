import React from "react";
import logo from "../images/logo.png";
import qrCodeLine from "../images/qrCodeLine.png";
import qrCodeFB from "../images/qrCodeFB.png";
import qrCodeIG from "../images/qrCodeIG.png";
import qrCodeGoogleMap from "../images/qrCodeGoogleMap.png";

const Footer = () => {
  return (
    <footer className="container-fluid m-0 p-0">
      <div className="colorBar w-100 bg-navy" style={{ height: "35px" }}></div>
      <div className="row justify-content-center m-0 p-0 py-5 bg-footergray">
        <div className="px-1 py-4 text-center">
          <img src={logo} alt="logo" style={{ maxHeight: "48px" }} />
        </div>
        <p className="text-center mb-0 py-3 fw-bolder">電話 : 06-5931598</p>
        <p className="text-center mb-0 py-3 fw-bolder">
          745002 台南市安定區中沙村沙崙24-1號
        </p>
        <p className="text-center mb-0 py-3 fw-bolder">
          聯絡時間 : AM08:00 ~ PM17:00
        </p>
        <div className="col-12 col-md-8 col-xxl-5 d-flex flex-wrap justify-content-center">
          <div className="col-5 col-md-3 p-3 overflow-hidden text-center">
            <img className="w-100 pb-1" src={qrCodeLine} alt="" />
            <p className=" fw-bolder">LINE</p>
          </div>
          <div className="col-5 col-md-3 p-3 overflow-hidden text-center">
            <img className="w-100 pb-1" src={qrCodeFB} alt="" />
            <p className=" fw-bolder">Facebook</p>
          </div>
          <div className="col-5 col-md-3 p-3 overflow-hidden text-center">
            <img className="w-100 pb-1" src={qrCodeIG} alt="" />
            <p className=" fw-bolder">IG</p>
          </div>
          <div className="col-5 col-md-3 p-3 overflow-hidden text-center">
            <img className="w-100 pb-1" src={qrCodeGoogleMap} alt="" />
            <p className=" fw-bolder">GoogleMap</p>
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center colorBar w-100 bg-navy text-light text-center"
        style={{ height: "100px" }}
      >
        Copyright &copy; Yuan Rong Technology Company All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
