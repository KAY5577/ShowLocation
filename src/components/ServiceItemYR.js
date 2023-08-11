import React from "react";
import ServiceItemCard from "./ServiceItemCard";
import itemImg1 from "../images/item01.jpg";
import itemImg2 from "../images/item02.jpg";
import itemImg3 from "../images/item03.jpg";
import itemImg4 from "../images/item04.jpg";
import itemImg5 from "../images/item05.jpg";
import itemImg6 from "../images/item06.jpg";
import itemImg7 from "../images/item07.jpg";
// import itemImg8 from "../images/item08.jpg";
// 服務項目
const ServiceItemYR = () => {
  let serviceItemsDatas = [
    { itemName: "太陽能工程", itemImgSrc: itemImg1 },
    { itemName: "鑽掘工程", itemImgSrc: itemImg2 },
    { itemName: "鋼構工程", itemImgSrc: itemImg3 },
    { itemName: "板膜工程", itemImgSrc: itemImg4 },
    { itemName: "土木工程", itemImgSrc: itemImg5 },
    { itemName: "機電工程", itemImgSrc: itemImg6 },
    { itemName: "測量工程", itemImgSrc: itemImg7 },
    { itemName: "其它工程", itemImgSrc: itemImg7 },
  ];
  return (
    <section className="container-filed">
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-12 col-lg-10 d-flex flex-wrap">
          {/* ================ */}
          {serviceItemsDatas.map((serviceItemData, index) => {
            return (
              <ServiceItemCard
                key={`serviceItem${index}`}
                serviceItemData={serviceItemData}
              />
            );
          })}
          {/* ================ */}
        </div>
      </div>
    </section>
  );
};

export default ServiceItemYR;
