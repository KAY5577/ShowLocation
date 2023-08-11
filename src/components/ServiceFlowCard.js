import React from "react";
// 服務流程 內的每一張流程卡
const ServiceFlowCard = ({ flowData }) => {
  return (
    <div className="col-6 col-md-4 col-xl-2 d-flex justify-content-center">
      <div className="col-11 col-sm-10 my-3 border rounded overflow-hidden position-relative shadow">
        <h5 className="w-100 d-flex justify-content-center fw-bolder position-absolute pt-1 pt-sm-2 pt-md-3 px-1 text-secondary">
          {flowData.title}
        </h5>
        <img className="w-100" src={flowData.src} alt="" />
      </div>
    </div>
  );
};

export default ServiceFlowCard;
