import React from "react";
import imgAboutYR from "../images/003.jpg";

const AboutYR = () => {
  return (
    <main className="container-fluid bg-lightgray pb-4 pb-sm-5 pb-lg-0">
      <div className="row justify-content-center align-items-stretch">
        {/* ========內容區======== */}
        <div className="col-12 col-lg-8 p-3 p-md-5 align-self-center">
          <p>
            元融科技是由一群致力於發展綠能的年輕人以及有豐富經驗的師傅所組成，在政府發展非核家園的過程中，擔任吹哨者的角色。
          </p>
          <p>最專業的測量及設計團隊、注重案場施工安全及高效率的工務人員。</p>
          <p>
            隨著太陽光電使用材料、技術上的不斷進步，以及製造產業的發展成熟，元融科技則擁有最專業的預製加工鋼構工廠，無疑在這缺料的時機點注入一股清流，工程期程也因此而穩定。
          </p>
          <p>
            國內於2009年7月8日公告再生能源發展條例，推廣再生能源利用，增進能源多元化，改善環境品質，帶動相關產業及增進國家永續發展，元融科技在此過程從無缺席，以專業的能力投入六項標準化作業程序:
          </p>
          <ul className="list-unstyled d-flex flex-wrap col-12 px-3">
            <li className="col-12 col-sm-6 col-lg-4">1_ 案場開發</li>
            <li className="col-12 col-sm-6 col-lg-4">2_ 初步規劃</li>
            <li className="col-12 col-sm-6 col-lg-4">3_ 細部設計與拆圖</li>
            <li className="col-12 col-sm-6 col-lg-4">4_ 工程發包與施工 </li>
            <li className="col-12 col-sm-6 col-lg-4">5_ 施工監造與管理</li>
            <li className="col-12 col-sm-6 col-lg-4">6_ 工程竣工與驗收</li>
          </ul>
          <p>
            過程中皆配合專業結構及電機技師統籌其必要專業，讓系統建置優質化，因應不同太陽光電發電系統設置型態，選用不同類型及品牌的高效能太陽能光電模組及變流器，通過國際認證標準把關，品質佳效率高，提供全套系統設備至少二十年發電效益之保證。
          </p>
          <p className="mb-0">
            自投入產業以來，「元融科技」存著「元始初心，融匯台灣」，帶著可創造更多就業機會，積極與他人合作建置太陽能光電系統。藉由與每個客戶所建立的堅強夥伴關係，穩定地創造了強而有力的成長,同時取得優勢，為此產業加入一股暖流，善盡企業責任，攜手為綠色能源一起貢獻一份心力。
          </p>
        </div>
        {/* ========圖片區======== */}
        <div className="col-12 col-lg-4 p-0 align-self-center">
          <div className="imgBoxAboutYR w-100 overflow-hidden">
            <img
              className="imgAboutYR w-100 img-fluid px-3 px-sm-5 pe-lg-0"
              src={imgAboutYR}
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutYR;
