import React from "react";
import FaithCard from "./FaithCard";
import bgImg from "../images/worldmap.jpg";
import imgSafe from "../images/ideaSafe.jpg";
import imgPro from "../images/ideaPro.jpg";
import imgForver from "../images/ideaForever.jpg";
// 經營理念
const FaithOfYR = () => {
  let datas = [
    {
      title: "安全",
      imgSrc: imgSafe,
      content:
        "我們注重電廠的施工安全及結構安全，架設一個太陽能電廠，安全一定是我們最為優先的考量。",
    },
    {
      title: "專業",
      imgSrc: imgPro,
      content: "用心設置、品質堅持的施工心態，是我們架設太陽能電廠的理念。",
    },
    {
      title: "永續",
      imgSrc: imgForver,
      content:
        "專業化的施工及服務，與大家一起打造減碳節能的生活，為地球環境的永續發展盡一份心力。",
    },
  ];

  return (
    <section className="container-filed">
      <div className="row p-0 pb-4 m-0 justify-content-center position-relative">
        <div className="z-index-bottom col-12 col-md-8 col-lg-6 col-xxl-5 d-flex justify-content-center position-absolute top-0 start-50 translate-middle-x">
          <img className="w-100" src={bgImg} alt="" />
        </div>

        <div className="col-12 d-flex flex-wrap justify-content-center">
          {/* ==================== */}
          {datas.map((data, index) => {
            return <FaithCard key={`faithCard${index}`} data={data} />;
          })}
          {/* ==================== */}
        </div>
      </div>
    </section>
  );
};

export default FaithOfYR;
