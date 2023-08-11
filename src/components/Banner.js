import React from "react";
import bannerImg from "../images/001.jpg";
import TopicBar from "./TopicBar";

const Banner = () => {
  return (
    <div className="position-relative container-fluid m-0 p-0">
      <div className="imgBox w-100 overflow-hidden">
        <img className="w-100" src={bannerImg} alt="imageForBanner" />
      </div>

      <div className="row w-100 h-100">
        <div
          className="position-absolute top-50 start-50 translate-middle col-10 col-sm-6 h-75 px-0"
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        >
          <div className="text-center w-100 h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder w-100 mb-0">元始初心 融匯台灣</h1>
            <h2 className="fw-bolder fs-3 w-100 mt-1 mt-md-4 mb-1">
              Let's go green!
            </h2>
            <TopicBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
