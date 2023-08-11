import React from "react";
import TopicBar from "./TopicBar";

const TopicBgGray = (props) => {
  // console.log(props.children);
  return (
    <div className="w-100 d-flex flex-column align-items-center py-5 bg-lightgray">
      <h2 className="fw-bolder fs-3 mb-0">{props.children}</h2>
      <TopicBar />
    </div>
  );
};

export default TopicBgGray;
