import React from "react";
import Banner from "../components/Banner";
import TopicBgWhite from "../components/TopicBgWhite";
import TopicBgGray from "../components/TopicBgGray";
import AboutYR from "../components/AboutYR";
import FaithOfYR from "../components/FaithOfYR";
import ServerFlowYR from "../components/ServerFlowYR";
import ServiceItemYR from "../components/ServiceItemYR";
import PerformanceYR from "../components/PerformanceYR";

const About = () => {
  return (
    <div className="mainArea">
      <Banner />
      <TopicBgGray>關於元融</TopicBgGray>
      <AboutYR />
      <TopicBgWhite>經營理念</TopicBgWhite>
      <FaithOfYR />
      <TopicBgGray>服務流程</TopicBgGray>
      <ServerFlowYR />
      <TopicBgWhite>服務項目</TopicBgWhite>
      <ServiceItemYR />
      <TopicBgGray>工程實績</TopicBgGray>
      <PerformanceYR />
    </div>
  );
};

export default About;
