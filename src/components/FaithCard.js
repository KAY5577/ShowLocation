import React from "react";
// 經營理念
const FaithCard = ({ data }) => {
  return (
    <div className="col-12 col-sm-4 col-lg-3 p-1 p-sm-3 d-flex flex-column align-items-center mb-5 mb-sm-0">
      <h2 className="text-center mb-2 mb-sm-3">{data.title}</h2>
      <div className="col-8 col-sm-10 col-lg-8 overflow-hidden border border-4 border-primary rounded-circle p-1">
        <div className="col-12 rounded-circle overflow-hidden">
          <img
            className="imgFaithOfYR rounded-circle w-100"
            src={data.imgSrc}
            alt=""
          />
        </div>
      </div>
      <p className="col-8 col-sm-10 col-lg-10 mt-4 mb-0">{data.content}</p>
    </div>
  );
};

export default FaithCard;
