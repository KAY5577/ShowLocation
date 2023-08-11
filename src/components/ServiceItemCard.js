import React from "react";
// 服務項目 內的每一張卡
const ServiceItemCard = ({ serviceItemData }) => {
  return (
    <div className="col-12 col-sm-6 col-md-3 d-flex justify-content-center mb-5">
      <div className="serviceItemCard col-10 border rounded text-center overflow-hidden shadow">
        <img className="w-100 shadow" src={serviceItemData.itemImgSrc} alt="" />
        <h5 className="bg-navy text-light fw-bolder mb-0 py-4 px-1">
          {serviceItemData.itemName}
        </h5>
      </div>
    </div>
  );
};

export default ServiceItemCard;
