import React from "react";
import ServiceFlowCard from "./ServiceFlowCard";
import imgFlow1 from "../images/flow1.jpg";
import imgFlow2 from "../images/flow2.jpg";
import imgFlow3 from "../images/flow3.jpg";
import imgFlow4 from "../images/flow4.jpg";
import imgFlow5 from "../images/flow5.jpg";
import imgFlow6 from "../images/flow6.jpg";
// 服務流程
const ServerFlowYR = () => {
  const flowDatas = [
    { title: "案場開發", src: imgFlow1 },
    { title: "初步規劃", src: imgFlow2 },
    { title: "細步設計與拆圖", src: imgFlow3 },
    { title: "工程發包與施工", src: imgFlow4 },
    { title: "施工監造 工程管理", src: imgFlow5 },
    { title: "工程竣工與驗收", src: imgFlow6 },
  ];
  return (
    <section className="container-filed bg-lightgray pb-4 pb-md-5">
      <div className="row p-0 m-0 justify-content-center">
        <div className="col-12 col-sm-9 col-lg-9 col-xl-12 col-xxl-11 d-flex flex-wrap mt-0 mt-md-1 mb-3">
          {/* ========== */}
          {flowDatas.map((flowData, index) => {
            return (
              <ServiceFlowCard key={`flowCard${index}`} flowData={flowData} />
            );
          })}
          {/* ========== */}
        </div>
      </div>
    </section>
  );
};

export default ServerFlowYR;
